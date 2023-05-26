import { useDisclosure } from "@mantine/hooks";
import { TaskData } from "../../../types/types";
import {
  Container,
  Title,
  Button,
  Box,
  Collapse,
  Text,
  Group,
} from "@mantine/core";

interface ITaskProps {
  task: TaskData;
}

const Task: React.FC<ITaskProps> = ({ task }) => {
  const [opened, { toggle }] = useDisclosure(false);

  const daysLeft: number = task.dueDate
    ? new Date().getTime() - task.dueDate.getTime()
    : 4;

  return (
    <Container>
      <Button>
        <Title fz={"sm"}>{task.title}</Title>
        {task.dueDate ? (
          <Title
            c={daysLeft < 3 ? (daysLeft < 1 ? "red" : "orange") : "blue"}
            fz={"xs"}
          >
            {task.dueDate.getDate()}
          </Title>
        ) : null}
      </Button>
      <Box maw={400} mx="auto">
        <Group position="center" mb={5}>
          <Button onClick={toggle}>Toggle content</Button>
        </Group>

        <Collapse in={opened}>
          <Text>{task.description}</Text>
        </Collapse>
      </Box>
    </Container>
  );
};

export default Task;
