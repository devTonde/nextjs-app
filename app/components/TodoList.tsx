import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      {tasks.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-xl">No tasks available</p>
        </div>
      ) : (
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TodoList;
