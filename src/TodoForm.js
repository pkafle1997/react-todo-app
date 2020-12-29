import { Button, Container, FormControl, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function TodoForm({ addTodo }) {

    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <Container maxWidth="sm">
            <form onSubmit = {handleSubmit}>
                <FormControl fullWidth={true}>
                    <TextField
                        label="Enter Todo here"
                        required={true}
                        style={{backgroundColor: "#CF5A41 ", borderRadius: "5px"}}
                        value = {text}
                        onChange = {(event) => setText(event.target.value)} 
                    />
                    <Button
                        variant="contained"
                        style = {{marginTop: 5}}
                        type = "submit"
                    >
                        Add Todo
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default TodoForm;
