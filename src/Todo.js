import { Button, Avatar, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core';
import React,{ useState } from 'react';
import db from './firebase';
import './Todo.css';
//import { makeStyles } from '@material-ui/core/styles';
// import {DeleteForeverIcon} from '@material-ui/icons/DeleteForever';

function Todo(props) {
    // const classes = useStyles();
    const [open, setOpen] = useState(false);
    // const handleOpen = () => {
    //     setOpen(true);
    // };

    return (
        <>
        <Modal 
            open={open}
            onClose={e => setOpen(false)} 
        >
            <div>
                <h1>I am a model</h1>
                <button onClick={e => setOpen(false)}></button>
            </div>
        </Modal>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.text} secondary="Dummy Deadline" />
            </ListItem>
            {/* <button onClick={e => setOpen(true)}>Edit</button>   */}
            {/* <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} /> */}
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete</Button>
        </List>
    </>
    )
}
 
export default Todo
