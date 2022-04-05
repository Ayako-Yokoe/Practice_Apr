import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Do the laundry',
      day: 'Apr 5',
      reminder: true
    },
    {
      id: 2,
      text: 'Take out the trash',
      day: 'Apr 6',
      reminder: true
    },
    {
      id: 3,
      text: 'Go grocery shopping',
      day: 'Apr 7',
      reminder: false
    },
    {
      id: 4,
      text: 'Valuum the living room',
      day: 'Apr 8',
      reminder: false
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask ])
  }


  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map(task => task.id === id
      ?  {...task, reminder: !task.reminder}
      : task
      )
    )
  }


  return (
    <div className="App">
      <Header title="Task Tracker" />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
        : "No Tasks To Show"}
    </div>
  );
}

export default App;
