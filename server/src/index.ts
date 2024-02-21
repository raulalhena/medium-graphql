import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers/resolvers.js';

import { AppDataSource } from './db/data-source.js';
import { Post } from './posts/entity/Posts.js';

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ ApolloServerPluginDrainHttpServer({ httpServer }) ],
});

await server.start();

app.use(
  '/graphql',
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(server),
);

app.get('/user-posts/:id', async (req, res) => {
  const userId = req.params.id;
  const Posts = (await AppDataSource).getRepository(Post);
  const userPosts = await Posts.findBy({ userId: userId });
  res.send(userPosts);
});

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`Server listening on http://localhost:4000/graphql`);