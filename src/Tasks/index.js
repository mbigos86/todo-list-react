import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                className={`${hideDoneTasks && task.done ? "tasks__hidden" : "tasks__item"}`} key={task.id}>
                <button className="tasks__button tasks__button--toggleDone">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__content${task.done ? " tasks__content--done" : ""}`}> {task.content} </span>
                <button className="tasks__button tasks__button--remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;