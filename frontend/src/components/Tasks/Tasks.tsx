import { NewTaskFormType, TaskList } from "../../types/types";
import { Stack, MediaQuery } from "@mantine/core";
import Task from "./Task/Task";
import { useState, useEffect } from "react";
import Header from "./Header";
import { v4 as uuidv4 } from 'uuid';

interface ITasksProps {
  tasks: TaskList;
  setTasks: React.Dispatch<React.SetStateAction<TaskList>>
}

const Tasks: React.FC<ITasksProps> = ({ tasks, setTasks }) => {
  const onSubmitHandler = (data: NewTaskFormType) => {
    const id = uuidv4();
    setTasks((prev) => [
      ...prev,
      { ...data, id, title: data.name, completed: false },
    ]);
  };

  useEffect(() => {
    tasks?.forEach((task) => setTasks((prev) => [...prev, task]));
  }, []);

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // Omit<TasksData, 'id'>
  // BE: id -> uuid

  return (
    <MediaQuery query="(min-width: 769px)" styles={{maxWidth: "60vw"}}>
    <Stack w={"90vw"} sx={{ alignSelf: "center", alignItems: "stretch" }}>
      <Header submitHandler={onSubmitHandler} />
      <Stack>
        {tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </Stack>
    </Stack>
    </MediaQuery>
  );
};

export default Tasks;
