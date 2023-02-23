import React, {useState} from 'react'
import { Todo } from '../models/todo'
import Card from '../UI/Card'
import './TodoItem.css';

interface Props{
    id: number,
    title: string,
    description: string,
    isDone: boolean,
    date: Date,
    time: Date,
    isDelayed: boolean,
    missedTime: number,
    editing: boolean,
    deleteTodo: (id: number) => void,
    handleDone: (id: number) => void,
    editTodo: (id: number) => void,
}

const TodoItem: React.FC<Props> = (props) => {

    const missedTimeUnits = new Date(props.missedTime).getTime();
    const missedSeconds = Math.floor((missedTimeUnits % (1000 * 60)) / 1000);
    const missedMinutes = Math.floor((missedTimeUnits % (1000 * 60 * 60)) / (1000 * 60));;
    const missedHours = Math.floor((missedTimeUnits % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));;
    const missedDays = Math.floor(missedTimeUnits / (1000 * 60 * 60 * 24));
    
    return (
    <Card>
        <li>
            {props.isDelayed && !props.isDone &&(
                <div>
                    <p style={{ fontSize: '10px', color: '#c92a2a'}}>Delayed by {missedDays} Days and {missedHours}:{missedMinutes}:{missedSeconds}</p>
                </div>
            )}
            <h1 style={props.isDelayed && !props.isDone ? {color: '#c92a2a'} : {color: '#212529'}}>{props.title}</h1>
            <p>{props.description}</p>
            <p style={{ fontSize: '10px', color: '#868e96' }}>Deadline: {props.date.toString()} / {props.time.toString()}</p>
            {!props.isDone && (
                <div className="actionContainer">
                    <button className="btn" onClick={() => props.deleteTodo(props.id)} disabled={props.editing}>Delete</button>
                    <button className="btn" onClick={() => props.handleDone(props.id)}>Done</button>
                    <button className="btn" onClick={() => props.editTodo(props.id)}>Edit</button>
                </div>
            )}
        </li>
    </Card>
  )
}

export default TodoItem;