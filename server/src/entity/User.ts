import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

}
