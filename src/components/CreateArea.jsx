import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    id: 0,
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target;
    
    setNote((prevNote) => {
      if(name === "title"){
        return {
          id: prevNote.id,
          title: value,
          content: prevNote.content
        }    
      } else if(name === "content"){
        return {
          id: prevNote.id,
          title: prevNote.title,
          content: value
        }  
      }
    });
  }

  function handleSubmit(event){
    setNote((prevNote) => ({
      id: ++prevNote.id,
      title: "",
      content: ""}));
    event.preventDefault();
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={() => {props.onClick(note)}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;