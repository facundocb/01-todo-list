import { ToDoItem } from "./ToDoItem"
export function ToDoList(toDos, toggleToDo, deleteToDo){
  return (
    <ul className='list'>
        {toDos.length === 0 && 'no to-do'}
        {toDos.map((toDo) => {
          return (
            <ToDoItem
            {...toDo}
              id={toDo.id}
              completed={toDo.completed}
              title={toDo.title}
              key={toDo.key}
              toggleToDo={toggleToDo}
              deleteToDo={deleteToDo}
            />
          )
        })}
    </ul>
 )
}