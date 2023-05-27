import { Stack, Title, Button } from "@mantine/core";
import { FooterProps } from "../../types/types";

const Footer = (props: FooterProps) => {
  function fetchTasksHandler() {
    props.fetchTasks();
  }

  return (
    <Stack align="center" h={"12vh"} bg={"dark"} w={'100vw'} sx={{justifySelf: "flex-end", justifyContent: "space-evenly", gap: 0}}>
      <Title c={"white"}>Don't know what to do?</Title>
      <Button onClick={fetchTasksHandler}>Give me some tasks!</Button>
    </Stack>
  );
};

export default Footer;
