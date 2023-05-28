import { Header, Title } from "@mantine/core";

const MainHeader = () => {
  return (
    <Header
      height={"10vh"}
      bg={"dark"}
      w={"101vw"}
      sx={{ justifyContent: "center", alignItems: "center", borderBottom: "0" }}
      display={"flex"}
    >
      <Title align="center" color="white" size={"2.5em"}>
        My To Do List
      </Title>
    </Header>
  );
};

export default MainHeader;
