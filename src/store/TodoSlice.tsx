import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  title: string;
  description: string;
  isTodo: boolean;
  isEdit: boolean;
}
const TodoSlice = createSlice({
  name: "Todo",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const { id, title, description, isTodo } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
        todo.description = description;
        todo.isTodo = isTodo;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    isDoneTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.isTodo = !todo.isTodo;
      }
    },
    isEditDone: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.isEdit = !todo.isEdit;
      }
    },
  },
});
export const { addTodo, updateTodo, deleteTodo, isDoneTodo, isEditDone } =
  TodoSlice.actions;
export default TodoSlice;
