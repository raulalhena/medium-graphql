import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'mediumgraphql',
  synchronize: true,
  logging: false,
  entities: [ User ],
  migrations: [],
  subscribers: [],
});

export const AppDataSource = dataSource.initialize();
