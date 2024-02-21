import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation } from 'typeorm';
import { User } from '../../users/entity/User.js';

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
      id: number;

    @Column('varchar', { nullable: false })
      title: string;

    @Column('text', { nullable: false })
      content: string;

    @Column('boolean', { nullable: false, default: true })
      draft: boolean;

    @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
      date: Date;

    @Column('integer')
      userId: number;

    @ManyToOne(() => User, (user) => user.posts)
      user: Relation<User>;
}
