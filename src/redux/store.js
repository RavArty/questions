import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {fetchQuestionsStart} from './quiz/quiz.sagas'
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware()

//const middlewares = [thunk];
const middlewares = [sagaMiddleware];

//create-react has node environment
if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger)
}
//test

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(fetchQuestionsStart)
const persistor = persistStore(store)


export  {store, persistor};

//export default store;