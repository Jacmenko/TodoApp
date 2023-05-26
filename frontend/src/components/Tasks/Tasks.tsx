import { TaskList } from "../../types/types";
import { Stack, Center } from "@mantine/core";
import Task from "./Task/task";

const Tasks = (tasks: TaskList) => {
  return (
    <Center>
      <Stack>
        {tasks.map((task) => {
          return <Task task={task} />;
        })}
      </Stack>
    </Center>
  );
};

export default Tasks;
