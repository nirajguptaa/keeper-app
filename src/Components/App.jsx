import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "../CreateArea";

function App() {
  const [notes,setNotes]=useState([]);
  function addNote(newNote){
    setNotes(prevNote=>{
      return[...prevNote,newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>{
        return index!=id;
      });
    });
  }
  return (
    <div>
      <Header />
      {/* {notes.map(function createNote(noteItem) {
        return (
          <Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })} */}
      <CreateArea onAdd={addNote}/>

      {notes.map((noteItem,index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
