import React from 'react';
import logo from './logo.svg';
import './App.css';
import {sayHi, sayBye} from './say.js';
import * as Module from './site.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

    <h1>To-do CRUD</h1>
    <h3>Add</h3>
    <form action="javascript:void(0);" method="POST" onSubmit={Module.addItem}>
        <input type="text" id="add-name" placeholder="New to-do" />
        <input type="submit" value="Add" />
    </form>
    <div id="editForm">
        <h3>Edit</h3>
        <form action="javascript:void(0);" onSubmit={Module.updateItem}>
            <input type="hidden" id="edit-id" />
            <input type="checkbox" id="edit-isComplete" />
            <input type="text" id="edit-name" />
            <input type="submit" value="Save" />
            <a onClick={Module.closeInput} aria-label="Close">&#10006;</a>
        </form>
    </div>

    <p id="counter"></p>

    <table>
        <tr>
            <th>Is Complete?</th>
            <th>Name</th>
            <th></th>
            <th></th>
        </tr>
        <tbody id="todos"></tbody>
    </table>
 
    
        <p>
          Edit <code>src/App.js</code> and save to reload!!!!.
        </p>
        <button onClick={sayBye}>BUTTON</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
