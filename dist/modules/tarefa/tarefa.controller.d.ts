import { TarefaService } from './tarefa.service';
import { TarefaDTO } from './tarefa.dto';
export declare class TarefaController {
    private readonly tarefaService;
    constructor(tarefaService: TarefaService);
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
