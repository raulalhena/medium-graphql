import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../users/entity/User.js';
import { Post } from '../posts/entity/Posts.js';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root', // usuario de conexión 'root'
  password: '1234', // password del usuario root para conectar a MySQL
  database: 'mediumgraphql', // nombre de la base de datos del proyectos
  synchronize: true,
  logging: false,
  entities: [ User, Post ], // Entidades con las que trabajamos
  migrations: [],
  subscribers: [], 
});

export const AppDataSource = dataSource.initialize();
