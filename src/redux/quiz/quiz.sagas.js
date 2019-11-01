import {takeLatest, put, all, call} from 'redux-saga/effects'
import QuizActionTypes from './quiz.types';
import { apiCall } from '../../api/api'
import * as Constants from '../../constants'

import {
  fetchQuestionsSuccess,
  fetchQuestionsFailure
} from './quiz.actions'

import {setTotalQuestions} from '../progress/progress.actions'


export function* fetchQuestionsStartAsync(){

  try{ 
    const fetchData = yield apiCall(Constants.URL)
    console.log('data: ', fetchData)
    yield put(fetchQuestionsSuccess(fetchData))
    yield put(setTotalQuestions(fetchData.results.length))
  } catch (error){
    yield put(fetchQuestionsFailure(error.message))
  }
 
}

export function* fetchQuestionsStart(){
  yield takeLatest(
    QuizActionTypes.FETCH_QUESTIONS_START, 
    fetchQuestionsStartAsync
     )
}
