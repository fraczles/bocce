import React from 'react';
import './App.css';
import DatePicker from 'react-date-picker'

function App() {
  return (
    <div className='body'>
      <Header />
      <CustomDatePicker />
      <DateGrid />
    </div>
  );
}

const CustomDatePicker = () => 
  <div className='date-picker'>
    <DatePicker />
  </div>

const Header = () => 
  <div className="header">
    <h1>Stamford Bocce</h1>
  </div>

const DateGrid = () => 
  <div className='date-grid'>
    <DateGame />
  </div>

const ScoreBox = ({ column, row }) => 
  <form className={`score-box-${column}-${row}`}>15</form>;

class DateGame extends React.Component {
  render() {

    return (
      <div className='date-game'>
        <div className='team-name'>
          {this?.state?.teams[0]}
        </div>
        <div className='team-name'>
          {this?.state?.teams[1]}
        </div>
        {this.renderScoreBox(2, 1)}
        {this.renderScoreBox(3, 1)}
        {this.renderScoreBox(4, 1)}

        {this.renderScoreBox(2, 2)}
        {this.renderScoreBox(3, 2)}
        {this.renderScoreBox(4, 2)}
      </div>
    );
  }
  componentDidMount() {
    fetch(
        "http://localhost:5000/api/v1/teams")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                teams: json['teams'],
            });
            console.log(this.state.teams);
        })
}

  renderScoreBox(i, j) {
    return (
      <ScoreBox column={i} row={j}/>
    );
  }
  
}

export default App;
