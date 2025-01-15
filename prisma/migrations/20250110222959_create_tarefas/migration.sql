-- CreateTable
CREATE TABLE "Tarefas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'NAO_ESPECIFICADO',
    "deadline" TEXT NOT NULL,
    "priority" BOOLEAN NOT NULL DEFAULT false,
    "finished" BOOLEAN NOT NULL DEFAULT false
);
