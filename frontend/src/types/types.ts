export type FooterProps = {
  fetchTasks: () => void;
};

export type TaskList = TaskData[];

export type TaskData = {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  completed: boolean;
};

export type NewTaskForm = {
    name: string;
    description?: string;
    dueDate?: Date;
}

export type onSubmitNewTask = {
    opened: boolean; 
    close: () => void
} & onSubmit

export type onSubmit = {
    submitHandler: (data: NewTaskForm) => void;
}
