import Header from "../shared/Header";
import TaskBoard from "./TaskBoard";
import Footer from "../shared/Footer";
import { useEffect, useState } from "react";

export default function TaskBoardLayout() {
  // Tasks localstorage start
  const getFromLocalStorage = () => {
    const tasks = localStorage.getItem("tasks");
    return JSON.parse(tasks) || [];
  };

  const [tasks, setTasks] = useState(getFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // Tasks local storage end

  // Dark local Storage start
  const getDarkModeFromLocalStorage = () => {
    const theme = localStorage.getItem("theme");
    return theme || "dark";
  };

  const [theme, setTheme] = useState(getDarkModeFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  const toggoleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // Dark local Storage end

  // Search funtion start
  const [seachTrum, setSeachTrum] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.trim();
    setSeachTrum(value);
  };

  const displayTasks = tasks.filter((task) => {
    return task.title.toLowerCase().includes(seachTrum.toLowerCase());
  });
  // Search funtion end

  return (
    <section className="duration-500">
      <Header
        toggoleTheme={toggoleTheme}
        theme={theme}
        handleSearch={handleSearch}
        seachTrum={seachTrum}
      />
      <div className="flex-grow flex flex-col justify-center items-center w-full px-4 sm:px-2 lg:px-8 py-6 md:py-8 lg:py-10 mb-24">
        <TaskBoard
          allTasks={tasks}
          setTasks={setTasks}
          tasks={displayTasks}
          seachTrum={seachTrum}
        />
      </div>
      <Footer />
    </section>
  );
}
