import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { type Column, type Task } from './types'; // Import our types!

// Initial data for our board
const initialColumns: Column[] = [
  { id: 'todo', title: 'To Do', tasks: [{ id: '1', title: 'Task 1', content: 'Do something' }] },
  { id: 'inprogress', title: 'In Progress', tasks: [{ id: '2', title: 'Task 2', content: 'Work on it' }] },
  { id: 'done', title: 'Done', tasks: [] },
];

function App() {
  // Use TypeScript with useState to define the state's type
  const [columns, setColumns] = useState<Column[]>(initialColumns);

  return (
    <div className="flex h-screen w-full gap-4 p-4 bg-gray-100">
      {columns.map((column) => (
        <div key={column.id} className="flex-1">
          <h2 className="text-xl font-bold mb-4">{column.title}</h2>
          <div className="flex flex-col gap-4">
            {column.tasks.map((task) => (
              <Card key={task.id}>
                <CardHeader>
                  <CardTitle>{task.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{task.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;