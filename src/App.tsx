import React from 'react';
import BoardSize from './containers/BoardSize';
import Board from './containers/Board';
import SolveButton from './containers/SolveButton';
import ResultsList from './containers/ResultsList';
// import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BoardSize />
        <Board />
      </header>
      <br />
      <SolveButton />
      <ResultsList />


    </div>
  );
}

export default App;
