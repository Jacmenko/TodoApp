import Navigation from "./components/Navbar/Navigation";
import Footer from "./components/Footer/Footer";
import Tasks from "./components/Tasks/Tasks";
import { Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { TaskList } from "./types/types";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await fetch("/");

    console.log(data);

    setTasks(await data.json());
  };

  return (
    <Stack align="center" justify="space-between" sx={{ height: "100vh" }}>
      <Stack justify="space-between">
        <Navigation />
        <Tasks tasks={tasks} />
      </Stack>
      <Footer fetchTasks={fetchTasks} />
      <ScrollTop />
    </Stack>
  );
}

export default App;
