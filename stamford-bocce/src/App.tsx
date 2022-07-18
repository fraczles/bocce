import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <DateGrid />
  );
}

class DateGrid extends React.Component {
  render() {
    return (
      <div className='date-grid'>
        <DateGame />
        <DateGame />
      </div>
    );
  }
}

class DateGame extends React.Component {
  render() {
    return (
      <div className='date-game'>
        <div className='team-name'>
          Team A
        </div>
        <div className='team-name'>
          Team B
        </div>
        <ScoreBoxGrid />
      </div>
    );
  }
}


class ScoreBoxGrid extends React.Component {
  render() {
    return (
      <div className='score-box-grid'>
        {this.renderScoreBox(2)}
        {this.renderScoreBox(3)}
        {this.renderScoreBox(4)}
      </div>
    );
  }

  renderScoreBox(i: number) {
    return (
      // <ScoreBox column={i}/>
      <ScoreBox />
    );
  }
}

class ScoreBox extends React.Component {
  render() {
    return (
      <div className='score-box-{this.props.col}'>
        15
      </div>
    );
  }
}
    

interface ScoreBoxProps {
  column: number;
}

export default App;
