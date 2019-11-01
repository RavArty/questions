import QuizActionTypes from './quiz.types';


import {
  fetchQuestionsStart,
  fetchQuestionsSuccess,
  fetchQuestionsFailure
} from './quiz.actions'



  describe('fetchQuestionsStart action', () => {
  it('should create the fetchQuestionsStart action', () => {
    expect(fetchQuestionsStart().type).toEqual(
      QuizActionTypes.FETCH_QUESTIONS_START
    );
  });
});

describe('fetchQuestionsSuccess action', () => {
  it('should create the fetchQuestionsSuccess action', () => {
    const mockQuestion = [true, 'test']

    const action = fetchQuestionsSuccess(mockQuestion);

    expect(action.type).toEqual(QuizActionTypes.FETCH_QUESTIONS_SUCCESS);
    expect(action.payload).toEqual(mockQuestion);
  });
});

describe('fetchQuestionsFailure action', () => {
  it('should create the fetchQuestionsFailure action', () => {
    const action = fetchQuestionsFailure('error');

    expect(action.type).toEqual(QuizActionTypes.FETCH_QUESTIONS_FAILURE);
    expect(action.payload).toEqual('error');
  });
});

