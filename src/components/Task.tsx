import React, { useState } from "react";

import TickSvg from "../assests/svg/tick.svg";
import EditSvg from "../assests/svg/pencil.svg";
import DeleteSvg from "../assests/svg/delete.svg";

import { useDispatch } from "react-redux";

import Image from "next/image";
import {
  isDoneTodo,
  deleteTodo,
  isEditDone,
  updateTodo,
} from "@/store/TodoSlice";
interface Todo {
  id: string;
  title: string;
  description: string;
  isTodo: boolean;
  isEdit: boolean;
}
const Task: React.FC<Todo> = ({
  id,
  title,
  description,
  isTodo,
  isEdit,
}: Todo) => {
  const [currentTodo, setCurrentTodo] = useState<Todo>({
    id: id,
    title: title,
    description: description,
    isTodo: false,
    isEdit: false,
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCurrentTodo({
      ...currentTodo,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const handleIsDone = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(isDoneTodo(id));
  };

  const handleDeleteTodo = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(isEditDone(id));
  };
  const handleUpdateTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      ...currentTodo,
      id: id,
    };
    dispatch(updateTodo(newTodo));
    dispatch(isEditDone(id));
  };
  return (
    <div
      className={`p-5 w-[25rem] h-auto rounded-lg bg-white mt-[2rem] text-[#808191] text-[1.6rem]  ${
        isTodo ? "border-l-4 border-green-500" : ""
      } `}
    >
      <div className="flex justify-between  gap-5 ">
        <form onSubmit={handleUpdateTodo}>
          {isEdit ? (
            <input
              type="text"
              name="title"
              onChange={handleInputChange}
              value={currentTodo.title}
              className="text-[1.8rem] bg-transparent w-[15rem] text-[#6E6E6E]  font-medium p-2"
              placeholder="Edit Todo"
              required
            />
          ) : (
            <p className="text-s18 mb-[.5rem]  font-medium">{title} </p>
          )}
          {isEdit ? (
            <textarea
              name="description"
              onChange={handleInputChange}
              value={currentTodo.description}
              className="resize-none p-2 text-[1.6rem] text-[#808191] bg-transparent mt-[1rem] "
              placeholder="Edit Todo Description"
              required
            />
          ) : (
            <p className=" text-[1.6rem] text-[#808191] pb-[1rem] ">
              {description}
            </p>
          )}
          {isEdit && (
            <button
              className="px-[2.5rem] py-[.6rem] rounded-[1rem] bg-[#0062ff] text-white"
              type="submit"
            >
              Update
            </button>
          )}
        </form>
        <div className="flex flex-col justify-between gap-5 ">
          <button
            onClick={handleIsDone}
            className="flex justify-center items-center text-[2rem] w-[3rem] h-[3rem] bg-[#0062ff] p-2 rounded-full"
          >
            <Image src={TickSvg} alt="Done" />
          </button>
          <button
            onClick={handleEditTodo}
            className="flex justify-center items-center text-[2rem] w-[3rem] h-[3rem] bg-[#0062ff] p-2 rounded-full"
          >
            <Image src={EditSvg} alt="Edit" />
          </button>
          <button
            onClick={handleDeleteTodo}
            className="flex justify-center items-center text-[2rem] w-[3rem] h-[3rem] bg-[#0062ff] p-2 rounded-full"
          >
            <Image src={DeleteSvg} alt="Delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
