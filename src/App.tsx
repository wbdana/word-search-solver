import React from 'react';
import BoardSize from './containers/BoardSize';
import Board from './containers/Board';
import SolveOptions from './containers/SolveOptions';
import SolveButton from './containers/SolveButton';
import ResultsList from './containers/ResultsList';

const App: React.FC = () => {
  return (
    <div className="App">
      <SolveOptions />
      <BoardSize />
      <div>
        <Board />
        <SolveButton />
      </div>
      <ResultsList />


    </div>
  );
}

export default App;
