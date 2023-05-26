import { NewTaskFormType, TaskList } from "../../types/types";
import { Stack, Center } from "@mantine/core";
import Task from "./Task/Task";
import { useState } from "react";
import Header from "./Header";

interface ITasksProps {
    tasks: TaskList;
}

const Tasks: React.FC<ITasksProps> = ({tasks}) => {
  const [currentTasks, setCurrentTasks] = useState(tasks);
  
    const onSubmitHandler = (data: NewTaskFormType) => {
        
        setCurrentTasks(prev => [...prev, {...data, id: "4", title: data.name, completed: false}]);
    }

    // Omit<TasksData, 'id'>
    // BE: id -> uuid 

    return (
    <Center>
      <Header submitHandler={onSubmitHandler} />
      <Stack>
        {currentTasks.map((task) => 
           <Task key={task.id} task={task} />
    )}
      </Stack>
    </Center>
  );
};

export default Tasks;
