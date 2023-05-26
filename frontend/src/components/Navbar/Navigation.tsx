import { Header, Title } from "@mantine/core";

const Navigation = () => {
  return (
    <Header
      height={100}
      bg={"dark"}
      sx={{ position: "fixed", top: 0, left: 0, right: 0, justifyContent:'center', alignItems:'center'}}
      display={"flex"}
    >
      <Title align="center" color="white">
        My To Do List
      </Title>
    </Header>
  );
};

export default Navigation;
