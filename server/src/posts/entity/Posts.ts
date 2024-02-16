import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
      id: number;

    @Column('varchar', { nullable: false })
      title: string;

    @Column('text', { nullable: false })
      content: string;

    @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
      date: Date;

}
