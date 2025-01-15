import { Injectable } from '@nestjs/common';
import { TarefaDTO } from './tarefa.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class TarefaService {
  constructor(private prisma: PrismaService) {}

  async create(data: TarefaDTO) {
    const tarefaExists = await this.prisma.tarefa.findFirst({
      where: {
        title: data.title,
        description: data.description,
      },
    });

    if (tarefaExists) {
      throw new Error('Essa tarefa já existe. Confira na lista de tarefas');
    }

    const tarefa = await this.prisma.tarefa.create({
      data,
    });

    return tarefa;
  }

  async findAll() {
    return this.prisma.tarefa.findMany();
  }

  async update(id: string, data: TarefaDTO) {
    const tarefaExists = await this.prisma.tarefa.findUnique({
      where: {
        id,
      },
    });
    if (!tarefaExists) {
      throw new Error('Tarefa não existe!');
    }

    return await this.prisma.tarefa.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const tarefaExists = await this.prisma.tarefa.findUnique({
      where: {
        id,
      },
    });
    if (!tarefaExists) {
      throw new Error('Tarefa não existe!');
    }

    return await this.prisma.tarefa.delete({
      where: {
        id,
      },
    });
  }
}
