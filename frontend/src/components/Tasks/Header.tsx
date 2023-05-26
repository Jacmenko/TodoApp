import { Stack, Title, Button } from "@mantine/core";
import NewTask from "./NewTaskForm";
import { useDisclosure } from "@mantine/hooks";
import NewTaskForm from "./NewTaskForm";
import { onSubmit } from "../../types/types";

const Header = ({submitHandler}: onSubmit) => {
    const [opened, { close }] = useDisclosure(false);
  
    const addTaskHandler = () => {

  }
  
    return (
    <>
      <Stack>
        <Title c={"gray"} fz={"sm"}>
          To-Do
        </Title>
        <Button onClick={addTaskHandler}>Add Task</Button>
      </Stack>
      <hr />
      <NewTaskForm opened={opened} close={close} submitHandler={submitHandler}/>
    </>
  );
};

export default Header;
