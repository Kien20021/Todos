import { Button, GetProps, Input } from "antd";
import "@ant-design/v5-patch-for-react-19";
import { useState } from "react";
import RenderTodos from "./RenderTodos";
import { v4 as uuidv4 } from "uuid";

export type Todos = {
  id: String;
  name: String;
};
const InputTodos = () => {
  const [nameTodos, setNameTodos] = useState("");
  const [todosList, setTodosList] = useState<Todos[]>([]);

  const handleAddTodo = () => {
    const updateTodolist: Todos = {
      id: uuidv4(),
      name: nameTodos,
    };
    setTodosList([updateTodolist, ...todosList]);
    setNameTodos("");
  };

  return (
    <div className="bg-cyan-500 p-2 rounded-md">
      <div>
        <div className="flex items-center  mt-3">
          <Input
            placeholder="Add Todos"
            className=" outline-red-500"
            value={nameTodos}
            onChange={(e) => setNameTodos(e.target.value)}
          />
          <Button
            color="danger"
            variant="solid"
            onClick={handleAddTodo}
            disabled={nameTodos ? false : true}>
            Add
          </Button>{" "}
        </div>
        {nameTodos.length === 0 ? (
          <p className="block text-red-700 text-[14px]">*add cong viec</p>
        ) : (
          <p className="hidden">Nhap con viec</p>
        )}
      </div>
      <p>Them 1 dong o day de de mo</p>
      {todosList.length === 0 ? (
        <p className="text-3xl mt-5 text-white text-center">NO DATA</p>
      ) : (
        <RenderTodos todosList={todosList} />
      )}
    </div>
  );
};

export default InputTodos;
