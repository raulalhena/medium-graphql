import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post } from '../../posts/entity/Posts.js';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
      id: number;

    @Column('varchar', { nullable: false })
      name: string;

    @Column('varchar', { nullable: false, unique: true })
      email: string;

    @Column('varchar', { nullable: false })
      password: string;

    @OneToMany(() => Post, (post) => post.user)
      posts: Post[];

}
