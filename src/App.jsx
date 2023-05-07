import { useState } from 'react';
import { NewToDoForm } from './NewToDoForm.jsx';
import './styles.css';
import { ToDoList } from './ToDoList.jsx';

export default function App() {
  const [toDos, setToDos] = useState([]);

  function addToDo(title) {
    setToDos((currentToDos) => {
      return [
        ...currentToDos,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }

  function toggleToDo(id, completed) {
    setToDos((currentToDos) => {
      console.log(id + ', ' + completed)
      return currentToDos.map((toDo) => {
        if (toDo.id === id) {
          console.log('a')
          return { ...toDo, completed }
        }

        return toDo;
      })
    })
  }

  function deleteToDo(id) {
    setToDos((currentToDos) => {
      return currentToDos.filter((toDo) => toDo.id !== id);
    });
  }

  return (
    <>
      <NewToDoForm onSubmit={addToDo} />
      <h1 className='header'>To-do list</h1>
      <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
    </>
    
  );
}
