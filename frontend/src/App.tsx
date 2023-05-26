import Navigation from "./components/Navbar/Navigation";
import Footer from "./components/Footer/Footer";
import Tasks from "./components/Tasks/Tasks";
import { Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { TaskList } from "./types/types";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await (await fetch("/")).json();

    setTasks(data);
  };

  return (
    <Stack align="stretch">
      <Navigation />
      <Tasks tasks={tasks} />
      <Footer fetchTasks={fetchTasks} />
    </Stack>
  );
}

export default App;
