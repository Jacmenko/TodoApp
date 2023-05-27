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
  Grid,
  ActionIcon,
} from "@mantine/core";
import dayjs from "dayjs";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { AiFillCalendar, AiOutlineCheckCircle } from "react-icons/ai";

interface ITaskProps {
  task: TaskData;
}

const Task: React.FC<ITaskProps> = ({ task, deleteTask }) => {
  const [opened, { toggle }] = useDisclosure(false);

  const daysLeft: number = task.dueDate
    ? dayjs(task.dueDate).diff(dayjs(), "days")
    : 0;

  const formattedDate = `${(
    "0" + (task.dueDate ? task.dueDate.getDate() : new Date().getDate())
  ).slice(-2)}-${(
    "0" +
    (task.dueDate
      ? task.dueDate.getUTCMonth() + 1
      : new Date().getUTCMonth() + 1)
  ).slice(-2)}-${
    task.dueDate ? task.dueDate.getFullYear() : new Date().getFullYear()
  }`;

  return (
    <div>
      <Grid sx={{ boxShadow: "1px 2px 9px rgb(0 0 0 / 0.1)" }} m={0} h={"6vh"}>
        <Grid.Col span={7} display={"flex"} sx={{alignItems: "center"}}>
          <ActionIcon
            onClick={toggle}
            bg={"transparent"}
            c={"dark"}
          >
            {opened ? <BsChevronDown /> : <BsChevronRight />}
          </ActionIcon>
          <Stack display={"inline-flex"} justify="center" sx={{ rowGap: 0 }}>
            <Title display={"inline"} fz={"md"}>
              {task.title}
            </Title>
            {task.dueDate ? (
              <Container
                pl={0}
                ml={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
                c={daysLeft < 3 ? (daysLeft < 1 ? "red" : "orange") : "blue"}
              >
                <AiFillCalendar />
                <Title fz={"xs"} ml={"0.4vw"}>
                  {formattedDate}
                </Title>
              </Container>
            ) : null}
          </Stack>
        </Grid.Col>
        <Grid.Col span={2} offset={3} display={"flex"} sx={{justifyContent: "flex-end", alignItems: "center"}}>
          <ActionIcon onClick={deleteTask}>
            <AiOutlineCheckCircle style={{fontSize: "2rem", color: "green"}} />
          </ActionIcon>
        </Grid.Col>
      </Grid>
      <Collapse in={opened} bg={"#f9f9f9"} sx={{borderRadius: "16px"}}>
        <Text ml={"3vw"}>{task.description}</Text>
      </Collapse>
    </div>
  );
};

export default Task;
