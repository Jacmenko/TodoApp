export type TaskList = TaskData[];

export type TaskData = {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  completed: boolean;
};

export type NewTaskFormType = {
  name: string;
  description?: string;
  dueDate?: Date;
};

export type onSubmitNewTask = {
  opened: boolean;
  close: () => void;
} & onSubmit;

export type onSubmit = {
  submitHandler: (data: NewTaskFormType) => void;
};
