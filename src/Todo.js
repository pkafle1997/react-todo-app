import { Card, CardContent, Container, IconButton, Typography } from '@material-ui/core';
import { Check, Delete } from '@material-ui/icons';
import React from 'react';
import './Todo.css'

function Todo({ id, title, checkTodo, isCompleted, deleteTodo}) {
    const markComplete = () => checkTodo(id);
    const delTodo = () => deleteTodo(id);
    const todoStyle = isCompleted 
        ? { textDecoration:"line-through" }
        : { textDecoration:"none" }
    return (
        <div>
            <Container>
                <Card className="card" variant = "outlined" style = {{marginTop: 35, background: "#B86D5D"}}>
                    <CardContent>
                        <Typography variant="h5" components="h2" style={todoStyle}>
                            <IconButton onClick={markComplete}>
                                <Check className="check-mark" style={{color: "#ffffff"}}/>
                            </IconButton>
                            {title}
                            <IconButton onClick={delTodo} style={{float: "right"}}>
                                <Delete style = {{color: "#ffffff"}}/>
                            </IconButton>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default Todo;
