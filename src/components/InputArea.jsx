import React, {useState} from "react";
import { isPropertySignature } from "typescript";

function InputArea (props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;
        // console.log({name, value});

        setNote( prevNote => {
            return {...prevNote,
            [name]: value
        };
        });
        // if (name === "title") {
        //     setNote( prev => {
        //         return {
        //             title: value,
        //             content: prev.content
        //         };
        //     });
        // } else if (name === "content") {
        //     setNote( prev => {
        //         return {
        //             title: prev.title,
        //             content: value
        //         };
        //     });
        // }

    }

    return (
        <div>
            <form>
                <input
                name="title"
                placeholder="Title"
                value={note.title}
                onChange={handleChange} />

                <textarea
                name="content" 
                placeholder="Enter a note here..."
                value={note.content}
                onChange={handleChange} />

                <button onClick={(event) => {
                    props.onAdd(note);
                    setNote({
                        title: "",
                        content: ""
                    });
                    event.preventDefault();
                    }}>Add</button>
            </form>
        </div>
    )
}

export default InputArea;