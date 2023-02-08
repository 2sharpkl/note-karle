import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App(){

    const [notes, setNotes] = useState([]);

    function handleClick(note){
        setNotes((prevNote) => {return [...prevNote, note]});
    }

    function deleteNote(id){
        setNotes(() => notes.filter((note,index) => {return index !== id}));
    }

    return (<div>
        <Header />
        <CreateArea onClick={handleClick}/>
        {notes.map((note, index) => <Note onClick={deleteNote} key={index} id={index} title={note.title} content={note.content}/>)}
        <Footer />
    </div>);
}

export default App;

