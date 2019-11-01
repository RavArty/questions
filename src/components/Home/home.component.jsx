import React from 'react'
import {connect} from 'react-redux'

import { setCurrentRouter } from '../../redux/progress/progress.actions';
import { setTotalQuestions } from '../../redux/progress/progress.actions';

export const Home = ({setCurrentRouter, totalQuestions}) => {

  const startQuiz = () => {
    setCurrentRouter('quiz')
  }

  return(
    <div>
      <div className='bold-text'>Welcome to the Trivia Challenge!</div>
      <div className='regular-text' style={{marginTop: '110px'}}>You will be presented with {totalQuestions} True or False questions</div>
      <div className='regular-text'>Can you score 100%</div>
      {totalQuestions 
        ? <button className='button' onClick={startQuiz}>BEGIN</button>
        : null
      }
    </div>
  )

}

const mapStateToProps = ({quiz: {questions}, progress: {totalQuestions}}) => ({
  questions,
  totalQuestions
});

const mapDispatchToProps = dispatch => ({
  setCurrentRouter: router => dispatch(setCurrentRouter(router)),
  setTotalQuestions: total => dispatch(setTotalQuestions(total))

});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(Home);