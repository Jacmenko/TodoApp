import { Stack, Title, Button } from "@mantine/core";

const Header = () => {
  return (
    <>
      <Stack>
        <Title c={"gray"} fz={"sm"}>
          To-Do
        </Title>
        <Button onClick={addTaskHandler}>Add Task</Button>
      </Stack>
      <hr />
    </>
  );
};

export default Header;
