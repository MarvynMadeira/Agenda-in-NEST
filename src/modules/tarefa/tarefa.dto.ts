import { Category } from '@prisma/client';

export type TarefaDTO = {
  id?: string;
  title: string;
  description: string;
  category: Category;
  deadline: string;
  priority: boolean;
  finished: boolean;
};
