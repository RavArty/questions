import ProgressActionTypes from './progress.types';
import progressReducer from './progress.reducer';

const initialState = {
  route: 'home',
  questionNumber: 0,
  results: [],
  totalQuestions: 0,
  score: 0
};

describe('progressReducer', () => {

  it('should return initial state', () => {
  expect(progressReducer(undefined, {})).toEqual(initialState);
    });

  it('should set currentRouter to payload', () => {
    const mockTweets = { route: 'Test' }
    expect(
      progressReducer(initialState, {
            type: ProgressActionTypes.CURRENT_ROUTER,
            payload: mockTweets
          }).route
        ).toEqual(mockTweets);
  });

  it('should set nextQuestion to payload + 1', () => {
    const mockTweets = { questionNumber: 1 }
    const mockPrevState = { questionNumber: 2 }
    expect(
      progressReducer(mockPrevState, {
            type: ProgressActionTypes.NEXT_QUESTION,
            payload: mockTweets
          }).questionNumber
        ).toBe(3);
  });
    
    
})