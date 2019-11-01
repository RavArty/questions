import QuizActionTypes from './quiz.types';
import { apiCall } from '../../api/api'
import * as Constants from '../../constants'

import {
  setTotalQuestions
} from '../progress/progress.actions'

export const fetchQuestionsStart = () => ({
  type: QuizActionTypes.FETCH_QUESTIONS_START
})

export const fetchQuestionsSuccess = questions => ({
  type: QuizActionTypes.FETCH_QUESTIONS_SUCCESS,
  payload: questions
})

export const fetchQuestionsFailure = errorMessage => ({
  type: QuizActionTypes.FETCH_QUESTIONS_FAILURE,
  payload: errorMessage
})


export const fetchQuestionsStartAsync = () => {
  return dispatch => {
    dispatch(fetchQuestionsStart());

    apiCall(Constants.URL)
    .then(data => dispatch(fetchQuestionsSuccess(data)))
   // .then(data => console.log('data: ', data.payload.results.length))
    .then(data => dispatch(setTotalQuestions(data.payload.results.length)))
    .catch(error => dispatch(fetchQuestionsFailure(error.message)))
  }
}