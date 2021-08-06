import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({ charset: 'utf8mb4' })
  content: string;
}
