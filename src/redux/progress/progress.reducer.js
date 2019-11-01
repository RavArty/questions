import ProgressActionTypes from './progress.types';

const INITIAL_STATE = {
  route: 'home',
  questionNumber: 0,
  results: [],
  totalQuestions: 0,
  score: 0
};

const INITIAL_STATE2 = {
  route: 'home',
  questionNumber: 0,
  results: [],
  score: 0
};

const progressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProgressActionTypes.CURRENT_ROUTER:
      return {
        ...state,
        route: action.payload
      }
    case ProgressActionTypes.NEXT_QUESTION:
      return {
        ...state,
        questionNumber: state.questionNumber + 1
      }
    case ProgressActionTypes.CURRENT_ANSWER:
      return {
        ...state,
        results: [...state.results, action.payload]
      }
    case ProgressActionTypes.TOTAL_QUESTIONS:
      return {
        ...state,
        totalQuestions: action.payload
    }
    case ProgressActionTypes.SCORE:
      return {
        ...state,
        score: state.score + 1
    }
    case ProgressActionTypes.RESET_DATA:
      return {
        ...state,
        ...INITIAL_STATE2
        // route: 'home',
        // score: 0,
        // results: [],
        // questionNumber: 0
      }
    default:
      return state;
  }
};

export default progressReducer;