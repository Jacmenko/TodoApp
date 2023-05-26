import { Container, Title, Button } from "@mantine/core";
import { FooterProps } from "../../types/types";

const Footer = (props: FooterProps) => {
  function fetchTasksHandler() {
    props.fetchTasks();
  }

  return (
    <Container>
      <Title>Don't know what to do?</Title>
      <Button onClick={fetchTasksHandler}>Give me some tasks!</Button>
    </Container>
  );
};

export default Footer;
