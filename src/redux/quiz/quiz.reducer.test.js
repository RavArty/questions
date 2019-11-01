import QuizActionTypes from './quiz.types';
import quizReducer from './quiz.reducer';

const initialState = {
  questions: null,
  isFetching: false,
  errorMessage: undefined
};

describe('quizReducer', () => {
  it('should return initial state', () => {
    expect(quizReducer(undefined, {})).toEqual(initialState);
  });

  it('should set isFetching to true if fetchingQuestionsStart action', () => {
    expect(
      quizReducer(initialState, {
        type: QuizActionTypes.FETCH_QUESTIONS_START
      }).isFetching
    ).toBe(true);
  });

  it('should set isFetching to false and questions to payload if fetchingQuestionssSuccess', () => {
    const mockItems = [[{ id: 1 }, { id: 2 }]];
    expect(
      quizReducer(initialState, {
        type: QuizActionTypes.FETCH_QUESTIONS_SUCCESS,
        payload: mockItems
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      questions: mockItems
    })
  })

  it('should set isFetching to false and errorMessage to payload if fetchingQuestionsFailure', () => {
    expect(
      quizReducer(initialState, {
        type: QuizActionTypes.FETCH_QUESTIONS_FAILURE,
        payload: 'error'
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: 'error'
    });
  });
})
