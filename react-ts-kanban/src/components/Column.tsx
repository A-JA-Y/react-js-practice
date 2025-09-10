// src/components/Column.tsx
import { useEffect, useRef, useState } from 'react';
import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { type Column as ColumnType, type Task } from '../types'; // Rename the imported type
import { TaskCard } from './TaskCard';

type ColumnProps = {
  column: ColumnType;
  onTaskDrop: (task: Task, columnId: string) => void; // Add prop for the handler
};

export const Column = ({ column , onTaskDrop}: ColumnProps) => {
  const ref = useRef(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  // Set up the drop target functionality
 useEffect(() => {
  const el = ref.current;
  if (!el) return;

  return dropTargetForElements({
    element: el,
    // Add the getData function
    getData: () => ({ columnId: column.id }),
    onDragEnter: () => setIsDraggedOver(true),
    onDragLeave: () => setIsDraggedOver(false),
    onDrop: (args) => {
      console.log("Something was dropped!", args);
      onTaskDrop(args.source.data.task as Task, column.id);
      setIsDraggedOver(false);
    },
  });
}, [column.id, onTaskDrop]);


  return (
    // Use the `isDraggedOver` state for visual feedback
    <div
      ref={ref}
      className={`flex-1 p-4 rounded-lg transition-colors ${
        isDraggedOver ? 'bg-gray-300' : 'bg-gray-200'
      }`}
    >
      <h2 className="text-xl font-bold mb-4">{column.title}</h2>
      <div className="flex flex-col gap-4">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};