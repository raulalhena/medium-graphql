import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './graphql/resolvers/users';
import { typeDefs } from './graphql/schema';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

export const connect = async () => {
  const { url } = await startStandaloneServer( apolloServer, {
    listen: { port: 3000 }
  });
  if(url) console.log('Server listening on port 3000...');
};

connect();