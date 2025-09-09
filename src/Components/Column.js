import React, {useContext} from 'react';
import {Col} from "react-bootstrap";
import Task from "./Task";
import { MyContext } from "../MyContext";


const Column = ({column}) => {
    const {tasks} = useContext(MyContext);
    return (
        <Col style={{backgroundColor: "#ebf3fa", margin: "4px", padding: "6px", borderRadius: "6px"}}>
            <h4 style={{textAlign: "center", backgroundColor: "#70a8dc", color:"#fff",margin: "4px", padding: "6px", borderRadius: "6px"}}>{column.title}</h4>
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