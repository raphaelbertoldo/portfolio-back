import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { SkillsEntity } from './entities/skill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SkillsEntity])],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}
