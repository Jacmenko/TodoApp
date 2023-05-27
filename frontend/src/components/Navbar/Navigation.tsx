import { Header, Title } from "@mantine/core";

const Navigation = () => {
  return (
    <Header
      height={"10vh"}
      bg={"dark"}
      w={"101vw"}
      sx={{justifyContent:'center', alignItems:'center', borderBottom: "0"}}
      display={"flex"}
    >
      <Title align="center" color="white">
        My To Do List
      </Title>
    </Header>
  );
};

export default Navigation;
