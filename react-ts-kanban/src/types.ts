// src/types.ts
export type Task = {
  id: string;
  title: string;
  content: string;
};

export type Column = {
  id: string;
  title: string;
  tasks: Task[];
};