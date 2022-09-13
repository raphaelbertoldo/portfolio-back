import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { SkillsEntity } from './entities/skill.entity';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(SkillsEntity)
    private readonly skillsRepository: Repository<SkillsEntity>,
  ) {}

  async create(data: CreateSkillDto) {
    const skill = this.skillsRepository.create(data);
    return await this.skillsRepository.save(skill);
  }

  async findAll() {
    return await this.skillsRepository.find();
  }

  async findOne(id: string) {
    return await this.skillsRepository.findOneOrFail({ id });
  }

  async update(id: string, data) {
    const skill = await this.skillsRepository.findOneOrFail({ id });

    this.skillsRepository.merge(skill, data);
    return await this.skillsRepository.save(skill);
  }

  async remove(id: string) {
    await this.skillsRepository.findOneOrFail({ id });
    await this.skillsRepository.softDelete({ id });
  }
}
