import { Stack, Title, Button } from "@mantine/core";
import { useState } from "react";
import { useNotification } from "../../Notifications/useNotifications";

interface IFooterProps {
  fetchTasks: () => void;
}

const Footer: React.FC<IFooterProps> = ({ fetchTasks }) => {
  const [dummyTasks, setDummyTasks] = useState(false);
  const { showErrorNotification } = useNotification();

  const fetchTasksHandler = () => {
    if (dummyTasks) {
      showErrorNotification("Finish your tasks!", "You still have some tasks to do!");
    } else {
      setDummyTasks(true);
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
        <Title sx={{ whiteSpace: "nowrap" }} c={"white"}>
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
