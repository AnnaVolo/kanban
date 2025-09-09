import React, {useContext} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import { MyContext } from "../MyContext";

const Task = ({task}) => {
    const {editTask, deleteTask, changePriority, changeStatus} = useContext(MyContext);
    const [showEditTask, setShowEditTask] = React.useState(false);
    const [newName, setNewName] = React.useState('');
    const handleEditTask = () =>{
        editTask(task.id, newName);
        setShowEditTask(false);
        setNewName('');
    }
    return (
        <Card className="mb-3">
                <Card.Body>
                    <Card.Title>{task.name}</Card.Title>
                    <Card.Text>{task.status}</Card.Text>
                    <div className="d-flex justify-content-between">
                        <div>{task.status !== 'todo' && (
                            <Button variant="light" onClick={()=>changeStatus(task.id, 'left')}>←</Button>
                        )}</div>
                        <div>{task.status !== 'done' && (
                            <Button variant="light" onClick={()=>changeStatus(task.id, 'right')}>→</Button>
                        )}</div>
                    </div>

                    <hr/>
                    {'Priority: '}{task.priority}

                        {task.priority >= 2 && (<Button style={{marginLeft:"6px"}} size="sm" variant="outline-secondary" onClick={()=>changePriority(task.id, 'up')}>↑</Button>)}
                        {task.priority >= 1 && task.priority<=5 && (<Button style={{marginLeft:"6px"}} size="sm" variant="outline-secondary" onClick={()=>changePriority(task.id, 'down')}>↓</Button>)}

                        <hr/>
                    {showEditTask ?
                        (
                            <>
                            <Form.Control
                                className="mb-2"
                                placeholder="New task name"
                                value={newName}
                                onChange={e=>setNewName(e.target.value)}></Form.Control>
                                <Button variant="outline-primary" onClick={handleEditTask}>Save</Button>
                                <Button style={{marginLeft:"6px"}} variant="outline-warning" onClick={()=>setShowEditTask(false)}>Cancel</Button>
                            </>
                        ) :
                        (
                            <div className="d-flex justify-content-between">
                                <Button variant="outline-primary" onClick={()=>setShowEditTask(true)}>Edit</Button>
                                <Button variant="outline-danger" onClick={()=>deleteTask(task.id)}>Delete</Button>
                            </div>
                        )}
                </Card.Body>
            </Card>

    );
};

export default Task;