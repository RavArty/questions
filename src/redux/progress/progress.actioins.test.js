import ProgressActionTypes from './progress.types';

import {
  setCurrentRouter,
  setTotalQuestions,
  setCurrentAnswer
} from './progress.actions';

describe('setCurrentRouter action', () => {
  it('should create setCurrentRouter action', () => {
    const mockItem = {
      value: 'home'
    };

    const action = setCurrentRouter(mockItem);

    expect(action.type).toEqual(ProgressActionTypes.CURRENT_ROUTER);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('setTotalQuestions action', () => {
  it('should create setTotalQuestions action', () => {
    const mockItem = {
      value: 10
    };

    const action = setTotalQuestions(mockItem);

    expect(action.type).toEqual(ProgressActionTypes.TOTAL_QUESTIONS);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('setCurrentAnswer action', () => {
  it('should create setCurrentAnswer action', () => {
    const mockItem = {
      value: 'test'
    };

    const action = setCurrentAnswer(mockItem);

    expect(action.type).toEqual(ProgressActionTypes.CURRENT_ANSWER);
    expect(action.payload).toEqual(mockItem);
  });
});

