import { Stack, Title, Button } from "@mantine/core";

interface IFooterProps {
  fetchTasks: () => void;
}

const Footer: React.FC<IFooterProps> = ({fetchTasks}) => {
  return (
    <Stack align="center" h={"12vh"} bg={"dark"} w={'100vw'} sx={{justifySelf: "flex-end", justifyContent: "space-evenly", gap: 0}}>
      <Title c={"white"}>Don't know what to do?</Title>
      <Button bg={"#027148"} sx={{"&:hover": {backgroundColor: "#027148"}}} onClick={fetchTasks}>Give me some tasks!</Button>
    </Stack>
  );
};

export default Footer;
