import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import Modal from './components/Modal';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [showAddBtn, setShowAddBtn] = useState(false);
  const jsonServer = 'https://json-server-for-to-do-list.herokuapp.com/tasks';

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();

      setTaskList(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(jsonServer);
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`${jsonServer}/${id}`);
    const data = await res.json();

    return data;
  };

  const deleteTask = async (id) => {
    await fetch(`${jsonServer}/${id}`, {
      method: 'DELETE',
    });

    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);

    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`${jsonServer}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const addTask = async (task) => {
    const res = await fetch(jsonServer, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTaskList([...taskList, data]);
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddBtn(!showAddBtn)} showAdd={showAddBtn} />
      {showAddBtn && (
        <Modal
          show={showAddBtn}
          close={() => setShowAddBtn(!showAddBtn)}
          onAdd={addTask}
        />
      )}

      {taskList.length > 0 ? (
        <Tasks
          tasks={taskList}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
