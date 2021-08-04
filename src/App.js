import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comments from './components/Comments';
import CommentForm from './components/CommentForm';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <CommentForm />
        <Comments />
        
      </header>
    </div>
    </Provider>
  );
}

export default App;
