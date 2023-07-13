import React, { useState } from "react";
import { addTodo } from "../store/TodoSlice";
import { useDispatch } from "react-redux";

interface Todo {
  id: string;
  title: string;
  description: string;
  isTodo: boolean;
  isEdit: boolean;
}

const InputTask: React.FC = () => {
  const dispatch = useDispatch();
  const [currentTodo, setCurrentTodo] = useState<Todo>({
    id: "",
    title: "",
    description: "",
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
  const handleTodoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      ...currentTodo,
      id: Math.random().toString(),
    };
    dispatch(addTodo(newTodo));
    setCurrentTodo({
      id: "",
      title: "",
      description: "",
      isTodo: false,
      isEdit: false,
    });
  };

  return (
    <form
      onSubmit={handleTodoSubmit}
      className="p-5 w-[25rem] h-auto rounded-lg bg-white mt-[2rem] text-white text-[1.6rem]"
    >
      <div className="flex justify-between items-center gap-5 mb-[1rem]">
        <input
          type="text"
          name="title"
          onChange={handleInputChange}
          value={currentTodo.title}
          className="text-[1.8rem] bg-transparent w-[15rem] text-[#6E6E6E]  font-medium p-2"
          placeholder="Add Todo"
          required
        />

        <button className="flex justify-center items-center text-[2rem] w-[3rem] h-[3rem] bg-[#0062ff] p-2 rounded-full">
          +
        </button>
      </div>
      <textarea
        name="description"
        onChange={handleInputChange}
        value={currentTodo.description}
        className="resize-none p-2 text-[1.6rem] text-[#808191] bg-transparent "
        placeholder="Add Todo Description"
        required
      />
    </form>
  );
};

export default InputTask;
