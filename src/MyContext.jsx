import {createContext, useState} from "react";
import {Button, Form, InputGroup, Modal} from "react-bootstrap";

export const MyContext = createContext();

export function MyContextProvider({ children }) {
    const initialTasks = [
        {
            id: 10,
            name: 'Send the email',
            status: 'todo',
            priority: 1
        },
        {
            id: 12,
            name: 'Write Kanban',
            status: 'todo',
            priority: 2
        },
        {
            id: 14,
            name: 'Write Local Shop',
            status: 'todo',
            priority: 3
        },
        {
            id: 15,
            name: 'Write Fifteens Game',
            status: 'done',
            priority: 1
        },
        {
            id: 36,
            name: 'Write Tic Tac Toe',
            status: 'progress',
            priority: 1
        },
        {
            id: 25,
            name: 'Learn JS',
            status: 'done',
            priority: 2
        },
        {
            id: 26,
            name: 'Practice react',
            status: 'progress',
            priority: 2
        },
        {
            id: 17,
            name: 'Do homework',
            status: 'test',
            priority: 2
        },
        {
            id: 19,
            name: 'Read a book',
            status: 'test',
            priority: 2
        }
    ]
    const statuses = ['todo', 'progress', 'test', 'done'];
    const [tasks, setTasks] = useState(initialTasks);
    const [showAddTask, setShowAddTask ] = useState(false);


    const [newTask, setNewTask ] = useState('');
    const [newPriority, setNewPriority ] = useState('');
    const addTask = () => {

        let maxId = tasks.reduce((max, obj) => obj.id > max ? obj.id : max,0);
        console.log(maxId);
        let newObj = {id: maxId +1, name: (newTask||"New task"), status: 'todo', priority: ((newPriority>=1 && newPriority<=6) ? newPriority : 1)}
        let newTasks = [...tasks];
        newTasks.push(newObj);
        console.log(newTasks);
        setTasks(newTasks);
        setShowAddTask(false);
    }
    const editTask = (id, newName) => {
        const newTasksList = tasks.map(task => task.id === id ? {...task, name: newName} : task);
        setTasks(newTasksList);
    }
    const changePriority = (id, direction) => {
        // eslint-disable-next-line array-callback-return
        const newTasksList = tasks.map(task => {
            if (task.id === id) {
                if (direction === 'up') return {...task, priority: Number(task.priority) - 1}
                if (direction === 'down') return {...task, priority: Number(task.priority) + 1}
            } else {
                return task
            }
        });
        setTasks(newTasksList);
    }
    const deleteTask = (id) => {
        const newTasksList = tasks.filter(task => task.id !== id);
        setTasks(newTasksList);
    }
    const changeStatus = (id, direction) => {
        // eslint-disable-next-line array-callback-return
        const newTasksList = tasks.map(task => {
            if (task.id === id) {
                if (direction === 'right') return {...task, status: statuses[statuses.indexOf(task.status) + 1]}
                if (direction === 'left') return {...task, status: statuses[statuses.indexOf(task.status) - 1]}
            } else {
                return task;
            }
        });
        setTasks(newTasksList);
    }
    return (
        <MyContext.Provider value={{editTask, deleteTask, changePriority, changeStatus, tasks, setTasks, newTask, setNewTask, newPriority, setNewPriority, addTask, setShowAddTask}}>
            {children}
            <Modal show={showAddTask} onHide={() => setShowAddTask(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add new task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-4">
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Task name: </InputGroup.Text>
                            <Form.Control
                                value={newTask}
                                aria-label="Task name"
                                onChange = {(e)=>setNewTask(e.target.value)}/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Task priority: </InputGroup.Text>
                            <Form.Control
                                value={newPriority}
                                aria-label="Task priority"
                                onChange = {(e)=>setNewPriority(e.target.value)} />
                        </InputGroup>

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" type="submit" onClick={addTask}>Save</Button>
                    <Button
                        variant="outline-warning"
                        style={{marginLeft:"6px"}}
                        type="submit" onClick={() => setShowAddTask(false)}>Cancel</Button>

                </Modal.Footer>
            </Modal>
        </MyContext.Provider>
    )
}

