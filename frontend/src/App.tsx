import MainHeader from "./components/Header/MainHeader";
import Footer from "./components/Footer/Footer";
import Tasks from "./components/Tasks/Tasks";
import { Stack, MantineProvider } from "@mantine/core";
import { useState } from "react";
import { TaskList } from "./types/types";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton";

function App() {
  const [tasks, setTasks] = useState<TaskList>([]);

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:4000/", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setTasks((prev) => [...prev, ...data["tasks"]]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MantineProvider
      theme={{
        fontFamily: "Work Sans, sans-serif",
      }}
    >
      <Stack align="center" justify="space-between" sx={{ height: "100vh" }}>
        <Stack justify="space-between">
          <MainHeader />
          <Tasks tasks={tasks} setTasks={setTasks} />
        </Stack>
        <Footer fetchTasks={fetchTasks} numberOfTasks={tasks.length} />
        <ScrollTopButton />
      </Stack>
    </MantineProvider>
  );
}

export default App;
