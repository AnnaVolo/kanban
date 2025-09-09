
import './App.css';
import {Button, Container, InputGroup, Form, Row} from "react-bootstrap";
import {useContext, useState} from "react";
import Column from "./Components/Column";
import {MyContext} from "./MyContext";

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
            id: 3,
            title: 'In Test',
            status: 'test'
        },
        {
            id: 4,
            title: 'Done',
            status: 'done'
        }
    ];

function App() {
    const {setShowAddTask} = useContext(MyContext);

    return (
        <Container>
            <h1>Kanban Board</h1>
            <Button className="mb-4" variant="outline-primary" onClick={() => setShowAddTask(true)}>Add task</Button>

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
