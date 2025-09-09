import {createContext, useState} from "react";

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

    const editTask = (id, newName) => {
        const newTasksList = tasks.map(task => task.id === id ? {...task, name: newName} : task);
        setTasks(newTasksList);
    }

    const changePriority = (id, direction) => {
        // eslint-disable-next-line array-callback-return
        const newTasksList = tasks.map(task => {
            if (task.id === id) {
                if (direction === 'up') return {...task, priority: task.priority - 1}
                if (direction === 'down') return {...task, priority: task.priority + 1}
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
        <MyContext.Provider value={{editTask, deleteTask, changePriority, changeStatus, tasks, setTasks}}>
            {children}
        </MyContext.Provider>
    )
}



