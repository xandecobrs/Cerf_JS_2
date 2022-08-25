import React, { useState } from "react";

import '../styles/AddTask.css'
import Button from "./Button";

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    }

    return (
        <div className="add-task-conteiner">
            <input className="add-task-input" type="text" value={inputData} onChange={handleInputChange} /> 
            <div className="add-task-button-conteiner">
            <Button onClick={handleAddTaskClick}>Adicionar!</Button>

            </div>
        </div>    
    );
}

export default AddTask;