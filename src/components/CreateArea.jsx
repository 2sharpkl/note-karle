import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [clicked, setClick] = useState(false);

  const [note, setNote] = useState({
    id: 0,
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target;
    
    setNote((prevNote) => {
      return {
          ...prevNote,
          [name] : value
        } 
    });
  }

  function submitNote(event){
    props.onClick(note);
    setNote((prevNote) => ({
      id: ++prevNote.id,
      title: "",
      content: ""}));
    event.preventDefault();
  }

  function handleClick(){
    setClick(true);
  }


  return (
    <div>
      <form class="create-note">
      {clicked && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
        <textarea onChange={handleChange} onClick={handleClick} name="content" placeholder="Take a note..." rows={clicked ? 3: 1} value={note.content}/>
        <Zoom in={clicked}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;