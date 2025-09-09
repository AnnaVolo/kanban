import React, {useContext} from 'react';
import {Col} from "react-bootstrap";
import Task from "./Task";
import { MyContext } from "../MyContext";


const Column = ({column}) => {
    const {tasks} = useContext(MyContext);
    return (
        <Col>
            <h4>{column.title}</h4>
            {tasks
                .filter(task => task.status === column.status)
                .sort((a, b) => a.priority - b.priority)
                .map(task =>(
                    <Task
                        task={task}
                        key={task.id}
                    />
                ))
            }
        </Col>
    );
};

export default Column;