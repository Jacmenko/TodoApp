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

const Task = (task: TaskData) => {
  const [opened, { toggle }] = useDisclosure(false);

  const daysLeft: number = new Date().getTime() - task.due_date.getTime();

  return (
    <Container>
      <Button>
        <Title fz={"sm"}>{task.title}</Title>
        <Title
          c={daysLeft < 3 ? (daysLeft < 1 ? "red" : "orange") : "blue"}
          fz={"xs"}
        >
          {task.due_date.getDate()}
        </Title>
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
