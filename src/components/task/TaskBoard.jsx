import { useState } from "react";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";
import NoTasksFound from "./NoTasksFound";

export default function TaskBoard({ allTasks, setTasks, tasks, seachTrum }) {
  const [showModal, setShowModal] = useState(false);

  const [isTaskUpdate, setIsTaskUpdate] = useState(null);

  const handleAddEdditTask = (newTask, isAddTask) => {
    if (isAddTask) {
      setTasks([...allTasks, newTask]);
    } else {
      setTasks(
        allTasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsTaskUpdate(null);
  };

  // tasks delete function start
  const deleteTasks = (tasksId) => {
    const filterTaskForDelete = allTasks.filter((task) => task.id !== tasksId);
    setTasks(filterTaskForDelete);
  };
  // tasks delete function end

  // All task delete function stat
  const handleDeleteAllTask = () => {
    setTasks([]);
  };
  // All task delete function end

  // Favorite toggole funtion start
  const handleFavorite = (tasksId) => {
    const updeteTask = allTasks.map((task) => {
      if (task.id === tasksId) {
        return {
          ...task,
          isFavorite: !task.isFavorite,
        };
      } else {
        return task;
      }
    });
    setTasks(updeteTask);
  };
  // Favorite toggole funtion end

  // Eddit task funtion start
  const handleEdditTask = (task) => {
    setIsTaskUpdate(task);
    setShowModal(true);
  };
  // Eddit task funtion end

  return (
    <>
      <section className="mt-16 md:mt-20" id="tasks">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 mt-16 md:mt-0 text-xl sm:text-2xl md:text-3xl text-center font-semibold">
            <h1 className="text-green-700 dark:text-white">
              আপনার কর্ম তালিকা তৈরি করুন
            </h1>
          </div>

          <div className="rounded-lg border dark:border-[rgba(206,206,206,0.12)] border-gray-400 dark:bg-[rgba(38,43,40,0.6)] bg-gray-300 backdrop-filter backdrop-blur-lg shadow-lg px-4 py-6 sm:px-2 md:px-8 lg:px-10 xl:px-12 md:py-10 lg:py-12">
            {tasks.length > 0 || seachTrum ? (
              <TaskList
                tasks={tasks}
                deleteTasks={deleteTasks}
                handleFavorite={handleFavorite}
                handleEdditTask={handleEdditTask}
              />
            ) : (
              <NoTasksFound />
            )}

            <TaskActions
              setShowModal={setShowModal}
              dataLength={tasks.length > 0}
              handleDeleteAllTask={handleDeleteAllTask}
            />
          </div>
        </div>
      </section>
      {showModal && (
        <TaskModal
          onSave={handleAddEdditTask}
          handleCloseModal={handleCloseModal}
          isTaskUpdate={isTaskUpdate}
        />
      )}
    </>
  );
}
