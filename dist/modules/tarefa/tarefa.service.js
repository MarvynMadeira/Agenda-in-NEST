"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../../database/PrismaService");
let TarefaService = class TarefaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
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
    async update(id, data) {
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
    async delete(id) {
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
};
exports.TarefaService = TarefaService;
exports.TarefaService = TarefaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], TarefaService);
//# sourceMappingURL=tarefa.service.js.map