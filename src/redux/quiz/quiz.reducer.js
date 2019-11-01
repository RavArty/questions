import QuizActionTypes from './quiz.types';

const INITIAL_STATE = {
  questions: null,
  isFetching: false,
  errorMessage: undefined
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuizActionTypes.FETCH_QUESTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case QuizActionTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        questions: action.payload
      };
    case QuizActionTypes.FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default quizReducer;