import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import quizReducer from './quiz/quiz.reducer';
import progressReducer from './progress/progress.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['quiz', 'progress']
}


const rootReducer = combineReducers({
    quiz: quizReducer,
    progress: progressReducer
  });

// export default combineReducers({
//   quiz: quizReducer,
//   progress: progressReducer
// });

export default persistReducer(persistConfig, rootReducer)