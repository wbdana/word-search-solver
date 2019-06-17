import React from 'react';
import Header from './components/Header';
import BoardSize from './containers/BoardSize';
import Board from './containers/Board';
import SolveOptions from './containers/SolveOptions';
import SolveButton from './containers/SolveButton';
import ResultsList from './containers/ResultsList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <SolveOptions />
      <BoardSize />
      <Board />
      <SolveButton />
      <ResultsList />
    </div>
  );
}

export default App;
