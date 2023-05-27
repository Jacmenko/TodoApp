import { Stack, Title, Button, Divider, Container } from "@mantine/core";
import NewTask from "./NewTaskForm";
import { useDisclosure } from "@mantine/hooks";
import NewTaskForm from "./NewTaskForm";
import { NewTaskFormType, onSubmit } from "../../types/types";
import { AiOutlinePlus } from "react-icons/ai";

interface IHeader {
    submitHandler: (data: NewTaskFormType) => void,
}

const Header: React.FC<IHeader> = ({submitHandler}) => {
    const [opened, { close, open }] = useDisclosure(false);
  
    return (
    <>
      <Stack w={"60vw"} sx={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <Title c={"gray"} fz={"sm"}>
          To-Do
        </Title>
        <Button onClick={open} w={'15vw'} leftIcon={<AiOutlinePlus />}>Add Task</Button>
      </Stack>
      <Divider size={"sm"} sx={{width: '100%'}} mt={5}  />
      <NewTaskForm opened={opened} close={close} submitHandler={submitHandler}/>
    </>
  );
};

export default Header;
