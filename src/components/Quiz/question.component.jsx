import React from 'react'
import { connect } from 'react-redux';

const Question = ({questions, totalQuestions, questionNumber}) => (

    <>
      <div className='bold-text'>{questions.results[questionNumber].category}</div>
      <div className='regular-text'>Question {questionNumber+1} of {totalQuestions}</div>
      <div className='question'>{questions.results[questionNumber].question}</div>
    </>
)

const mapStateToProps = ({quiz: {questions}, progress:{totalQuestions, questionNumber}}) => ({
  questions,
  totalQuestions,
  questionNumber

});

export default connect(
  mapStateToProps
)(Question);
