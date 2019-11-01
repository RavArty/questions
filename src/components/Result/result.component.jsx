import React from "react";
import { connect } from 'react-redux';
import Answer from './answer.component'

import { setCurrentRouter } from '../../redux/progress/progress.actions';
import { resetData } from '../../redux/progress/progress.actions';
import { fetchQuestionsStart } from '../../redux/quiz/quiz.actions';
const Result = ({
  results, 
  score, 
  totalQuestions, 
  resetData, 
  fetchQuestionsStart,
  setCurrentRouter
}) => {

  const replayGame = () => {
 //   setCurrentRouter('home')
    fetchQuestionsStart()

    resetData()
  }

  return(
    <>
      <div className='bold-text'>You scored {score}/{totalQuestions}</div>
      <div className='results'>
        {results.map((result, i) => {
          return(
            <Answer
              key={i}
              answer={result[0]}
              question={result[1]}
            />
          )
        })
        }
        <button className='button' onClick={replayGame}>PLAY AGAIN?</button>
      </div>  
    </>
  )
}

const mapStateToProps = ({progress:{results, score, totalQuestions}}) => ({
  results,
  score,
  totalQuestions

});
const mapDispatchToProps = dispatch => ({
  fetchQuestionsStart: () => dispatch(fetchQuestionsStart()),
  resetData: () => dispatch(resetData()),
  setCurrentRouter: router => dispatch(setCurrentRouter(router))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);