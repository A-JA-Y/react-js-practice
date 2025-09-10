// src/App.tsx
import { useState } from "react";
import { type Column as ColumnType, type Task } from "./types";
import { Column } from "./components/Column"; // 1. Import the new component

const initialColumns: ColumnType[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [{ id: "1", title: "Task 1", content: "Do something" }],
  },
  {
    id: "inprogress",
    title: "In Progress",
    tasks: [{ id: "2", title: "Task 2", content: "Work on it" }],
  },
  { id: "done", title: "Done", tasks: [] },
];

function App() {
  const [columns, setColumns] = useState<ColumnType[]>(initialColumns);
  const handleDragEnd = (task: Task, destinationColumnId: string) => {
    setColumns((prevColumns) => {
      // Find the source column
      let sourceColumn: ColumnType | undefined;
      let taskIndex = -1;

      for (const col of prevColumns) {
        const index = col.tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) {
          sourceColumn = col;
          taskIndex = index;
          break;
        }
      }

      // If task not found, do nothing
      if (!sourceColumn) return prevColumns;

      const newColumns = [...prevColumns];

      // Remove the task from the source column
      const sourceTasks = [...sourceColumn.tasks];
      sourceTasks.splice(taskIndex, 1);
      const sourceColIndex = newColumns.findIndex(
        (col) => col.id === sourceColumn!.id
      );
      newColumns[sourceColIndex] = { ...sourceColumn, tasks: sourceTasks };

      // Add the task to the destination column
      const destColIndex = newColumns.findIndex(
        (col) => col.id === destinationColumnId
      );
      const destColumn = newColumns[destColIndex];
      const destTasks = [...destColumn.tasks];
      destTasks.push(task);
      newColumns[destColIndex] = { ...destColumn, tasks: destTasks };

      return newColumns;
    });
  };
  return (
    <div className="flex h-screen w-full gap-4 p-4 bg-gray-100">
      {columns.map((column) => (
        // 2. Use the new Column component
        <Column key={column.id} column={column} onTaskDrop={handleDragEnd} />
      ))}
    </div>
  );
}

export default App;
