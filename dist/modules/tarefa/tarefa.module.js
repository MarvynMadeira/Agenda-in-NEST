"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaModule = void 0;
const common_1 = require("@nestjs/common");
const tarefa_service_1 = require("./tarefa.service");
const tarefa_controller_1 = require("./tarefa.controller");
const PrismaService_1 = require("../../database/PrismaService");
let TarefaModule = class TarefaModule {
};
exports.TarefaModule = TarefaModule;
exports.TarefaModule = TarefaModule = __decorate([
    (0, common_1.Module)({
        controllers: [tarefa_controller_1.TarefaController],
        providers: [tarefa_service_1.TarefaService, PrismaService_1.PrismaService],
    })
], TarefaModule);
//# sourceMappingURL=tarefa.module.js.map