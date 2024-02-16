import { AppDataSource } from '../../db/data-source';
import { User } from '../../users/entity/User';
import { Post } from '../../posts/entity/Posts';

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
    }
  }
};