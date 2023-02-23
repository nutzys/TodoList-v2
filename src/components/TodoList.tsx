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
  const sortedTasks = props.items.sort((a, b) => a.isDelayed === b.isDelayed ? 0 : a.isDelayed ? -1 : 1);
  return (
    <div>
         <ul>
            {sortedTasks.map(item => (
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