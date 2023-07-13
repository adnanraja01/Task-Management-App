import Task from "@/components/Task";
import TaskHeading from "@/components/TaskHeading";
import InputTask from "@/components/InputTask";
// import store from "@/store";
import { useSelector } from "react-redux";

export default function Home() {
  const Todos = useSelector((state: any) => state.Todo);
  return (
    <div className="h-full sm:h-[100vh] bg-gradient-to-br from-[#0062ff]  to-[#61efff] p-10">
      <h1 className="text-[2rem] sm:text-[2.6rem] lg:text-[4rem] text-center text-white font-semibold ">
        Task Management App
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center ">
        <InputTask />
        {Todos.map((data: any) => (
          <Task
            key={data.id}
            id={data.id}
            isTodo={data.isTodo}
            title={data.title}
            description={data.description}
            isEdit={data.isEdit}
          />
        ))}
      </div>
    </div>
  );
}
