import { Module } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { TarefaController } from './tarefa.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [TarefaController],
  providers: [TarefaService, PrismaService],
})
export class TarefaModule {}
