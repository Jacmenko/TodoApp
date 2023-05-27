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
  Stack,
} from "@mantine/core";
import dayjs from "dayjs";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";

interface ITaskProps {
  task: TaskData;
}

const Task: React.FC<ITaskProps> = ({ task }) => {
  const [opened, { toggle }] = useDisclosure(false);

  const daysLeft: number = task.dueDate
    ? Math.floor(dayjs().diff(dayjs(task.dueDate, "hours")) / 24)
    : 4;

  return (
    <Stack
      sx={{ flexDirection: "row", boxShadow: "1px 2px 9px rgb(0 0 0 / 0.1)" }}
    >
      <Box>
        <Group>
          <Button onClick={toggle} bg={"transparent"} c={"dark"} pl={"sm"}>
            {opened ? <BsChevronDown /> : <BsChevronRight />}
          </Button>
        </Group>

        <Collapse in={opened}>
          <Text>{task.description}</Text>
        </Collapse>
      </Box>
      <Title>
        <Title fz={"sm"}>{task.title}</Title>
        {task.dueDate ? (
          <Title
            c={daysLeft < 3 ? (daysLeft < 1 ? "red" : "orange") : "blue"}
            fz={"xs"}
          >
            {task.dueDate}
          </Title>
        ) : null}
      </Title>
    </Stack>
  );
};

export default Task;
