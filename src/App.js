import React, { useEffect, useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import db from './firebase';
import firebase from 'firebase';
import { TextField, FormControl, AppBar, Toolbar, Typography, ThemeProvider, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from './components/Message';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0b81ff',
    },
    secondary: {
      main: '#00fc80',
    },
  },
});

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState('')
  //useState is a the way to setup a variable
  //useEffect if running a block of code on a condition

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    })
  });

  useEffect(() => {
    // code to run...
    setUsername(prompt('please enter your name'));
  },/*condition*/[]);


  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Messenger ⚡
          </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <div className="App__content">
        <h1>Welcome {username} 👋</h1>
        <form className="App__form">
          <FormControl className="App__formContainer">
            <ThemeProvider theme={theme}>
              <TextField className="App__formContainer--textFeild" label="write your message here" variant="standard" value={input} onChange={e => setInput(e.target.value)} />
              {/* <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button> */}
              <IconButton className="App__formContainer--iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
                <SendIcon />
              </IconButton>
            </ThemeProvider>
          </FormControl>
        </form>
        {messages.map(({ id, message }) => (
          <Message username={username} key={id} message={message} />
        ))}
      </div>
    </div >
  );
}

export default App;
