import { AppDataSource } from '../../data-source';
import { User } from '../../entity/User';

export const resolvers = {
  Query: {
    users: async (_, __) => {
      const Users = (await AppDataSource).getRepository(User);
      return await Users.find();
    }
  }
};