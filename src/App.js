// import logo from './logo.svg';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import db from './firebase';
import Todo from './Todo';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputT, setInput] = useState('');
  
  // when the appp loads, we need tp listen to the database and fetch new todos as thetget added / reloaded

  useEffect(() => {
    
    // this code here.. fires when the  app js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id,text: doc.data().text})))
     // console.log(snapshot.docs.map(doc => doc.data()));
    })
  }, []);

  const addTodo = (event) => {
    //this will fire whem we click the button
    event.preventDefault(); //Will stop the referesh

    db.collection('todos').add({
      text: inputT,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //setTodos([...todos,inputT]);
    // todos.push(inputT);
    // setTodos(todos);
    setInput('');
  }
 
  return (
    <div className="App">
      <h1>Hello there !!!!</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={inputT} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!inputT} type="submit" onClick={addTodo}  variant="contained" color="primary">Add Todo</Button>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>
    
      <ul>
       {todos.map(todo => (
         <Todo todo={todo}  />
       ))}
      </ul>
    </div>
  );
}

export default App;
