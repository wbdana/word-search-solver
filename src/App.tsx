import React from 'react';
import BoardSize from './containers/BoardSize';
import Board from './containers/Board';
// import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BoardSize />
        <Board />
      </header>


    </div>
  );
}

export default App;
