import { Stack, Title, Button } from "@mantine/core";
import NewTask from "./NewTaskForm";
import { useDisclosure } from "@mantine/hooks";
import NewTaskForm from "./NewTaskForm";
import { NewTaskFormType, onSubmit } from "../../types/types";

interface IHeader {
    submitHandler: (data: NewTaskFormType) => void,
}

const Header: React.FC<IHeader> = ({submitHandler}) => {
    const [opened, { close, open }] = useDisclosure(false);
  
    return (
    <>
      <Stack>
        <Title c={"gray"} fz={"sm"}>
          To-Do
        </Title>
        <Button onClick={open}>Add Task</Button>
      </Stack>
      <hr />
      <NewTaskForm opened={opened} close={close} submitHandler={submitHandler}/>
    </>
  );
};

export default Header;
