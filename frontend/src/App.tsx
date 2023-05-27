import Navigation from "./components/Navbar/Navigation";
import Footer from "./components/Footer/Footer";
import Tasks from "./components/Tasks/Tasks";
import { Stack, MantineProvider } from "@mantine/core";
import { useEffect, useState } from "react";
import { TaskList } from "./types/types";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:4000/", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setTasks(data["tasks"]);
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
          <Navigation />
          <Tasks tasks={tasks} />
        </Stack>
        <Footer fetchTasks={fetchTasks} />
        <ScrollTop />
      </Stack>
    </MantineProvider>
  );
}

export default App;
