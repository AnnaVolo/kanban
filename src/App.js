
import './App.css';
import {Button, Container, InputGroup, Form, Row} from "react-bootstrap";
import {useState} from "react";
import Column from "./Components/Column";

const columns = [
        {
            id: 1,
            title: 'To do',
            status: 'todo'
        },
        {
            id: 2,
            title: 'In progress',
            status: 'progress'
        },
        {
            id: 1,
            title: 'In Test',
            status: 'test'
        },
        {
            id: 1,
            title: 'Done',
            status: 'done'
        }
    ];

function App() {

    const [newTask, setNewTask ] = useState('');
    const [showAddTask, setShowAddTask ] = useState(true);
    const [newPriority, setNewPriority ] = useState('');


  return (

    <Container>
        <h1>Kanban Board</h1>
        {!showAddTask ? (
            <Button className="mb-4" variant="outline-primary" onClick={() => setShowAddTask(true)}>Add task</Button>
            ) : (
                <div className="mb-4">
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Enter new task name</InputGroup.Text>
                        <Form.Control
                            value={newTask}
                            aria-label="Task name"
                            onChange = {(e)=>setNewTask(e.target.value)}/>
                        <InputGroup.Text>Task priority</InputGroup.Text>
                        <Form.Control
                            value={newPriority}
                            aria-label="Task priority"
                            onChange = {(e)=>setNewPriority(e.target.value)} />
                    </InputGroup>
                    <Button variant="outline-primary" type="submit">Save</Button>
                    <Button
                        variant="outline-warning"
                        style={{marginLeft:"6px"}}
                        type="submit" onClick={() => setShowAddTask(false)}>Cancel</Button>
                </div>
        )}
        <Container>
            <Row>{columns.map(column => (
                    <Column
                        column = {column}
                        key = {column.id}
                    />
                )
            )}</Row>
        </Container>
    </Container>


  );
}

export default App;
