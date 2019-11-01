import ProgressActionTypes from './progress.types';

export const setCurrentRouter = router => ({
  type: ProgressActionTypes.CURRENT_ROUTER,
  payload: router
})

export const setNextQuestion = () => ({
  type: ProgressActionTypes.NEXT_QUESTION
})

export const setTotalQuestions = total => ({
  type: ProgressActionTypes.TOTAL_QUESTIONS,
  payload: total
})

export const setCurrentAnswer = answer => ({
  type: ProgressActionTypes.CURRENT_ANSWER,
  payload: answer
})

export const incrementScore = () => ({
  type: ProgressActionTypes.SCORE
})

export const resetData = () => ({
  type: ProgressActionTypes.RESET_DATA
})
