import React from "react" ;
import Footer from "./Footer";
import Header from "./Header" ;
import Note from "./Note" ;
import Notes from "../notes";

function App(){

return (

  <div> 

    <Header />

    {Notes.map( Noteitem => <Note 
      key = {Noteitem.key}
      title = {Noteitem.title}
      content = {Noteitem.content}
    />
       )}

    <Footer />
 
  </div>

);
}

export default App ;

