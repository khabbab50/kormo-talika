import { FaStar } from "react-icons/fa";

export default function TaskList({
  tasks,
  deleteTasks,
  handleFavorite,
  handleEdditTask,
}) {
  return (
    <div className="h-[490px] overflow-auto duration-500 w-full">
      {/* Table for larger screens */}
      <table className="table-fixed w-full">
        <thead className="dark:bg-[#121A16] bg-slate-700 sticky top-0">
          <tr>
            <th className="p-6 text-sm font-semibold capitalize text-left w-10 md:w-20">
              Mark
            </th>
            <th className="p-6 text-sm font-semibold capitalize text-left">
              Title
            </th>
            <th className=" p-6 text-sm font-semibold capitalize text-left hidden lg:block ">
              Description
            </th>
            <th className="p-6 text-sm font-semibold capitalize">Tags</th>
            <th className="p-6 text-sm font-semibold capitalize hidden md:block ">
              Priority
            </th>
            <th className="p-6 text-sm font-semibold capitalize ">Options</th>
          </tr>
        </thead>
        <tbody className="dark:text-white text-black even dark:[&>*:nth-child(even)]:bg-gray-800 [&>*:nth-child(even)]:bg-gray-200 ">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr
                key={task.id}
                className="[&>td]:align-baseline [&>td]:px-4 [&>td]:py-6"
              >
                <td>
                  <button onClick={() => handleFavorite(task.id)}>
                    {task.isFavorite ? (
                      <FaStar color="orange" />
                    ) : (
                      <FaStar color="gray" />
                    )}
                  </button>
                </td>
                <td className="">{task.title}</td>
                <td className="text-justify hidden lg:block">
                  <div>{task.description}</div>
                </td>
                <td>
                  <ul className="flex justify-center gap-1.5">
                    {task.tags.map((tag) => (
                      <li key={tag}>
                        <span className="inline-block whitespace-nowrap rounded-[45px] dark:bg-green-700 bg-green-600 px-3 py-1 text-sm capitalize text-white">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td
                  className={`text-center hidden md:block ${
                    task.priority === "High"
                      ? "text-red-500"
                      : task.priority === "Low"
                      ? "text-green-500"
                      : "text-blue-500"
                  }`}
                >
                  {task.priority}
                </td>
                <td className="">
                  <div className="flex items-center justify-center space-x-3">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md hidden md:block"
                      onClick={() => deleteTasks(task.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-md"
                      onClick={() => handleEdditTask(task)}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="[&>td]:align-baseline [&>td]:px-4 [&>td]:py-32">
              <td colSpan={6} className="text-red-400 text-center text-2xl">
                No Tasks found...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
