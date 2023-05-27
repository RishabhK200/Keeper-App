import React , {useState} from "react";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

 const [isExpanded, setExpanded] = useState(false); 

const [note,setNotes] = useState({                              // create object for title and content constants
    title: "",
    content: ""
});

function handleChange(event){
const {name,value} = event.target                             // destructured obj to get event name and value

setNotes(prevNote => {
    return {
        ...prevNote ,                                          // spread operator - to add all key value pair in notes
        [name] : value                                        // [name] = from string name to actual value of the name constant
    };
});
}

function submitNote(event){

props.onAdd(note)                                             // calling addNote from app.jsx and passing new note back to the app 

setNotes( {
    title:"",                                                  // to clear the createArea
    content:""
})

event.preventDefault();                                       // to prevent entire loading of the page
}

function expand(){
  setExpanded(true);
}

  return (
    <div>
      <form className="create-note" >
        {isExpanded? <input 
        name="title" 
        onChange = {handleChange} 
        value = {note.title} 
         placeholder="Title" 
        /> : null} 

        <textarea 
        name="content" 
        onClick = {expand}
        onChange = {handleChange} 
        value= {note.content} 
        placeholder="Take a note..." rows= {isExpanded?"3":"1"} 
        />

        <Zoom in={isExpanded}>
        <Fab 
        onClick = {submitNote}> <AddCircleRoundedIcon/>
        </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
