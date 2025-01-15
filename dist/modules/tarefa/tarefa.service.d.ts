import { TarefaDTO } from './tarefa.dto';
import { PrismaService } from 'src/database/PrismaService';
export declare class TarefaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: TarefaDTO): Promise<{
        id: string;
        title: string;
        description: string;
        category: import(".prisma/client").$Enums.Category;
        deadline: string;
        priority: boolean;
        finished: boolean;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        description: string;
        category: import(".prisma/client").$Enums.Category;
        deadline: string;
        priority: boolean;
        finished: boolean;
    }[]>;
    update(id: string, data: TarefaDTO): Promise<{
        id: string;
        title: string;
        description: string;
        category: import(".prisma/client").$Enums.Category;
        deadline: string;
        priority: boolean;
        finished: boolean;
    }>;
    delete(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        category: import(".prisma/client").$Enums.Category;
        deadline: string;
        priority: boolean;
        finished: boolean;
    }>;
}
