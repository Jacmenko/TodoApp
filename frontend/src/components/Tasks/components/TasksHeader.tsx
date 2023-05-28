import { Stack, Title, Button, Divider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NewTaskForm from "./NewTaskForm";
import { NewTaskFormType } from "../../../types/types";
import { AiOutlinePlus } from "react-icons/ai";

interface ITasksHeaderProps {
  submitHandler: (data: NewTaskFormType) => void;
}

const TasksHeader: React.FC<ITasksHeaderProps> = ({ submitHandler }) => {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <div>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title c={"gray"} fz={"sm"}>
          To-Do
        </Title>
        <Button
          bg={"#027148"}
          sx={{ "&:hover": { backgroundColor: "#027148" } }}
          onClick={open}
          w={"8rem"}
          leftIcon={<AiOutlinePlus />}
        >
          Add Task
        </Button>
      </Stack>
      <Divider size={"sm"} sx={{ width: "100%" }} mt={5} />
      <NewTaskForm
        opened={opened}
        close={close}
        submitHandler={submitHandler}
      />
    </div>
  );
};

export default TasksHeader;
