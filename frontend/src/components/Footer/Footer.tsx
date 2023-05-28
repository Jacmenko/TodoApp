import { Stack, Title, Button } from "@mantine/core";
import { useNotification } from "../../hooks/useNotifications";

interface IFooterProps {
  fetchTasks: () => void;
  numberOfTasks: number;
}

const Footer: React.FC<IFooterProps> = ({ fetchTasks, numberOfTasks }) => {
  const { showErrorNotification } = useNotification();

  const fetchTasksHandler = () => {
    if (numberOfTasks > 0) {
      showErrorNotification(
        "Finish your tasks!",
        "You still have some tasks to do!"
      );
    } else {
      fetchTasks();
    }
  };

  return (
    <>
      <Stack
        align="center"
        h={"12vh"}
        bg={"dark"}
        w={"101vw"}
        sx={{ justifySelf: "flex-end", justifyContent: "space-evenly", gap: 0 }}
      >
        <Title size={"h2"} sx={{ whiteSpace: "nowrap" }} c={"white"}>
          Don't know what to do?
        </Title>
        <Button
          bg={"#027148"}
          sx={{ "&:hover": { backgroundColor: "#027148" } }}
          onClick={fetchTasksHandler}
        >
          Give me some tasks!
        </Button>
      </Stack>
    </>
  );
};

export default Footer;
