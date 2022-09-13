import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
// import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectEntity } from './entities/projects.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectsRepository: Repository<ProjectEntity>,
  ) {}

  async create(data: CreateProjectDto) {
    const project = this.projectsRepository.create(data);
    return await this.projectsRepository.save(project);
  }

  async findAll() {
    return await this.projectsRepository.find();
  }

  async findOne(id: string) {
    return await this.projectsRepository.findOneOrFail({ id });
  }

  async update(id: string, data) {
    const skill = await this.projectsRepository.findOneOrFail({ id });

    this.projectsRepository.merge(skill, data);
    return await this.projectsRepository.save(skill);
  }

  async remove(id: string) {
    await this.projectsRepository.findOneOrFail({ id });
    await this.projectsRepository.softDelete({ id });
  }
}
