import { taksContract } from "@/lib/getContract";
import { ITask } from "@/types";
import React from "react";
import { useState, useEffect } from "react";
import { Checkbox } from "./ui/checkbox";

export default function TaskList() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const showTasks = async () => {
    const taskCount = await taksContract.taskCount();
    let tasks: ITask[] = [];
    for (var i = 1; i <= taskCount; i++) {
      const task = await taksContract.tasks(i);
      const taskId = task[0].toNumber();
      const taskContent = task[1];
      tasks.push({ id: taskId, content: taskContent });
    }
    setTasks(tasks);
  };

  const toggleCompleted = async (taskId: number) => {
    await taksContract.toggleCompleted(taskId);
  };

  useEffect(() => {
    showTasks();
  }, []);

  return (
    <ul className="grid gap-4 w-full">
      {tasks.map((task) => (
        <li key={task.id} className="py-2 shadow px-2">
          <span>{task.content}</span>
          <Checkbox onClick={() => toggleCompleted(task.id)} />
        </li>
      ))}
    </ul>
  );
}
