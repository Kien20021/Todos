import { Button, Checkbox } from "antd";
import React, { useState } from "react";
import { Todos } from "./InputTodos";

const RenderTodos = ({ todosList }: { todosList: Todos[] }) => {
  const [keyboard, setKeyboard] = useState(true);

  return (
    <div>
      {todosList.map((todo) => {
        return (
          <div className="flex mt-7 items-center justify-between border-blue-400 shadow-xl border rounded-md p-4 bg-blue-400">
            <Checkbox
              onChange={() => {
                setKeyboard(!keyboard);
              }}
              checked={keyboard}></Checkbox>

            <p className="text-white">{todo.name}</p>
            <div className=" flex gap-2">
              <Button color="pink" variant="solid">
                Edit
              </Button>
              <Button color="danger" variant="solid">
                Delete
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderTodos;
