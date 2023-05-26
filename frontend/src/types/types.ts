export type FooterProps = {
  fetchTasks: () => void;
};

export type TaskList = TaskData[];

export type TaskData = {
  id: number;
  title: string;
  description: string;
  due_date: Date;
  completed: boolean;
};

export type NewTaskForm = {
    name: string;
    description?: string;
    dueDate?: Date;
}

export type onSubmit<NewTaskForm> = {
    submitHandler: (data: NewTaskForm) => void;
}
