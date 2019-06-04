import React from 'react';
import BoardSize from './containers/boardSize';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <BoardSize />
        </p>
      </header>


    </div>
  );
}

export default App;
