import React, {useState, useRef} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function InputArea (props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const [isExpanded, setIsExpanded] = useState(false);

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

    function handleClick(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    

    return (
        <div>
            <form className="create-note">
            {isExpanded &&
                <input
                name="title"
                placeholder="Title"
                value={note.title}
                onChange={handleChange}
                autoFocus />
                }

                <textarea
                name="content" 
                placeholder="Enter a note here..."
                value={note.content}
                onClick={() => setIsExpanded(true)}
                onChange={handleChange}
                rows={isExpanded ? 3 : 1} />

                <Fab onClick={handleClick}>
                    <AddIcon />
                    </Fab>
            </form>
        </div>
    )
}

export default InputArea;