import React from 'react'
import { Todo } from '../models/todo'
import TodoItem from './TodoItem'

interface Props{
  items: Todo[],
  deleteTodo: (id: number) => void,
  handleDone: (id: number) => void,
  editTodo: (id: number) => void,
}

const TodoList: React.FC<Props> = (props) => {
  
  const delayed = props.items.filter(item => item.isDelayed === true);
  const notDelayed = props.items.filter(item => item.isDelayed === false);
  const sorted = [...delayed.sort((a, b) => b.missedTime - a.missedTime), ...notDelayed];
  
  return (
    <div>
         <ul>
            {sorted.map(item => (
              <TodoItem 
                id={item.id} 
                title={item.title}
                date={item.date}
                description={item.description} 
                missedTime={item.missedTime}
                isDone={item.isDone} 
                isDelayed={item.isDelayed}
                deleteTodo={props.deleteTodo} 
                editTodo={props.editTodo} 
                handleDone={props.handleDone}
              />))}
        </ul>
    </div>
  )
}

export default TodoList