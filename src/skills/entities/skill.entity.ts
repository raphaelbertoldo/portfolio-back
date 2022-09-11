import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'skills' })
export class SkillsEntity {
  @PrimaryColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  img: string;
}
