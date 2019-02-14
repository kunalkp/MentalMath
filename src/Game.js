import React, {Component} from 'react'

class Game extends Component {
  
  constructor(props) {
    super(props);
  	const valuesArray = this.makeNewArray();
	this.state = {
    	value1: valuesArray[0],
    	value2: valuesArray[1],
    	value3: valuesArray[2],
    	proposedAnswer: valuesArray[3],
    };
  }
    
    makeNewArray = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
        return [value1, value2, value3, proposedAnswer];
  	};

	getAnswer = (e) => {
      const isAnswerCorrect = this.checkAnswer(e.target.name);
      this.props.handleAnswer(isAnswerCorrect);
      const newValuesArray = this.makeNewArray();
      this.updateValuesArray(newValuesArray);
    }

	updateValuesArray = (newValuesArray) => {
        this.setState(currState => ({
        value1: newValuesArray[0],
        value2: newValuesArray[1],
        value3: newValuesArray[2],
        proposedAnswer: newValuesArray[3],
      }));
	};

	checkAnswer = (isAnswer) => {
      const { value1, value2, value3, proposedAnswer } = this.state;
      const correctAnswer = value1 + value2 + value3;

      return (
        (correctAnswer === proposedAnswer && isAnswer === 'true') ||
        (correctAnswer !== proposedAnswer && isAnswer === 'false')
      );
    }

    render() {
        const { value1, value2, value3, proposedAnswer } = this.state;
        return (
          <div>
            <div className="equation">
              <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
            </div>
            <button onClick={this.getAnswer} name="true">
              True
            </button>
            <button name="false" onClick={this.getAnswer} >
              False
            </button>
          </div>
        );
     }
}

export default Game;