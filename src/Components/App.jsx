import React, { useState } from "react" ;
import Footer from "./Footer";
import Header from "./Header" ;
import Note from "./Note" ;
// import Notes from "../notes";
import CreateArea from "./CreateArea";

function App(){

const [notes, setNotes] = useState([]);

function addNote(newNote){
  setNotes(prevNotes => {
    return [...prevNotes, newNote]
  })
}

function deleteNote(id){
  setNotes(prevItems => {
    return prevItems.filter( (noteItem, index) => {
      return index !== id ;
    });
  });
}

return (

  <div> 

    <Header />

    {/* {Notes.map( Noteitem => <Note                        // used map to iterate through the notes data one by one using Noteitem 
      key = {Noteitem.key}
      title = {Noteitem.title}                                // for data in notes.js
      content = {Noteitem.content}
    />
       )} */}

    <CreateArea onAdd = {addNote} />

     {notes.map((noteItem,index) => {                           // we also get index in map function
      return (
        <Note 
        key = {index}
        id = {index}
        title = {noteItem.title}
        content = {noteItem.content}
        onDelete = {deleteNote}
         />
      );
     })
     } 
   

    <Footer />
 
  </div>

);
}

export default App ;

