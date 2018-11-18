import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({
    length: 16
  })
  username: string;
  @Column() email: string;
}
