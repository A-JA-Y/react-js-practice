// src/components/TaskCard.tsx
import { useEffect, useRef } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { type Task } from '../types'; // Import our Task type

type TaskCardProps = {
  task: Task;
};

export const TaskCard = ({ task }: TaskCardProps) => {
  const ref = useRef(null); // Create a ref for the card element

  // Set up the draggable functionality
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return draggable({
      element: el,
      getInitialData: () => ({ task }), // Associate the task data with the drag
    });
  }, [task]);

  return (
    // Attach the ref to the main element of our card
    <div ref={ref}>
      <Card>
        <CardHeader>
          <CardTitle>{task.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{task.content}</p>
        </CardContent>
      </Card>
    </div>
  );
};