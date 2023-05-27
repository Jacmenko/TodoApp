import { Header, Title } from "@mantine/core";

const Navigation = () => {
  return (
    <Header
      height={"10vh"}
      bg={"dark"}
      w={"100vw"}
      sx={{justifyContent:'center', alignItems:'center'}}
      display={"flex"}
    >
      <Title align="center" color="white">
        My To Do List
      </Title>
    </Header>
  );
};

export default Navigation;
