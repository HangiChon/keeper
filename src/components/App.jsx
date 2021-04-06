import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";

function App() {
    const [noteArray, setNoteArray] = useState([]);

    function addItem(note) {
        setNoteArray( prev => {
            return [...prev, note];
        });
    }

    function deleteItem(id) {
        setNoteArray( prevArray => {
            return prevArray.filter( (eachNote, index) => {
                return index !== id;
            });
        });
    }
    // console.log(noteArray);

    return (
    <div>
    <Header />
    <InputArea onAdd={addItem} />
    {noteArray.map( (eachNote, index) => (
        <Note
            key={index}
            id={index}
            title={eachNote.title}
            content={eachNote.content}
            onDelete={deleteItem}
        />
        ))}
    
    <Footer />
    </div>
    );
}

export default App;