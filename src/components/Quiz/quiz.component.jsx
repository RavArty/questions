import React from "react";
import Question from './question.component'
import { connect } from 'react-redux';

import { setCurrentRouter } from '../../redux/progress/progress.actions';
import { setCurrentAnswer } from '../../redux/progress/progress.actions';
import { setNextQuestion } from '../../redux/progress/progress.actions';
import { incrementScore } from '../../redux/progress/progress.actions';

const Quiz = ({
  questions, 
  questionNumber, 
  totalQuestions,
  setNextQuestion, 
  setCurrentRouter,
  incrementScore,
  setCurrentAnswer}) => {

  const nextQuestion = (answer) => {

      let result = null
      const question = questions.results[questionNumber].question
      if(answer === questions.results[questionNumber].correct_answer){
        result = [true, question]
        incrementScore()  //if answer is right - score++
      }else{
        result = [false, question]
        
      }
      setCurrentAnswer(result)    //add result
      
      if(questionNumber === totalQuestions - 1){
        setCurrentRouter('result')    //if last question, set result
      }
      setNextQuestion()
    
  }

  return(
    <div>
      <Question/>
      <div className='answer-buttons'>
        <button className='button' onClick={() => nextQuestion("True")}>True</button>
        <button className='button' onClick={() => nextQuestion("False")}>False</button>
      </div>
    </div>
  )

}

const mapStateToProps = ({quiz: {questions}, progress:{route, totalQuestions, questionNumber}}) => ({
  questions,
  route,
  totalQuestions,
  questionNumber

});
const mapDispatchToProps = dispatch => ({
  setCurrentAnswer: answer => dispatch(setCurrentAnswer(answer)),
  setCurrentRouter: router => dispatch(setCurrentRouter(router)),
  setNextQuestion: () => dispatch(setNextQuestion()),
  incrementScore: () => dispatch(incrementScore())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);