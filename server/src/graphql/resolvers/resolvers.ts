import { AppDataSource } from '../../db/data-source.js';
import { User } from '../../users/entity/User.js';
import { Post } from '../../posts/entity/Posts.js';

export const resolvers = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    users: async (_, __) => {
      const Users = (await AppDataSource).getRepository(User);
      return await Users.find();
    },

    findUser: async(root, args) => {
      const { option, value } = args;
      const Users = (await AppDataSource).getRepository(User);
      return await Users.findOneBy({ [option]: value });
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    posts: async (_, __) => {
      const Posts = (await AppDataSource).getRepository(Post);
      return await Posts.find();
    },
  },

  Mutation: {
    addUser: async (root, args) => {
      const newUser = { ...args };
      const addedUser = (await AppDataSource).getRepository(User);
      return await addedUser.save(newUser);
    },

    addPost: async (root, args) => {
      const newPost = { ...args };
      newPost.publishedDate = new Date().toISOString();
      const addedPost = (await AppDataSource).getRepository(Post);
      return await addedPost.save(newPost);
    }
  }
};