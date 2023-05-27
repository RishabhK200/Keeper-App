import React from "react";
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import {  FiTrash2 } from "react-icons/fi";

function Note(props){

    function handleClick(){
           props.onDelete(props.id) 
    }

    return (
        <div className="note">
            
            <h1> {props.title}</h1>
            <p> {props.content} </p>

            <button onClick= {handleClick} > <FiTrash2 /> </button>
            {/* <Button variant="outlined" startIcon={<DeleteIcon />}>Delete
            </Button> */}
        </div>
    );
}

export default Note ;