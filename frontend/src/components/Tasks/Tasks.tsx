import { NewTaskFormType, TaskList } from "../../types/types";
import { Stack, Center } from "@mantine/core";
import Task from "./Task/Task";
import { useState, useEffect } from "react";
import Header from "./Header";
import { v4 as uuidv4 } from 'uuid';

interface ITasksProps {
  tasks: TaskList;
}

const Tasks: React.FC<ITasksProps> = ({ tasks }) => {
  const [currentTasks, setCurrentTasks] = useState(tasks);

  const onSubmitHandler = (data: NewTaskFormType) => {
    const id = uuidv4();
    setCurrentTasks((prev) => [
      ...prev,
      { ...data, id, title: data.name, completed: false },
    ]);
  };

  useEffect(() => {
    tasks?.forEach((task) => setCurrentTasks((prev) => [...prev, task]));
  }, [tasks]);

  const deleteTask = (id: string) => {
    setCurrentTasks(prev => prev.filter(task => task.id !== id));
  };

  // Omit<TasksData, 'id'>
  // BE: id -> uuid

  return (
    <Stack w={"60vw"} sx={{ alignSelf: "center", alignItems: "stretch" }}>
      <Header submitHandler={onSubmitHandler} />
      <Stack>
        {currentTasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Tasks;
