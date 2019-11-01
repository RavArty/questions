import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchQuestionsStart } from './redux/quiz/quiz.actions';
import { setTotalQuestions } from './redux/progress/progress.actions';

import Home from './components/Home/home.component'
import Quiz from './components/Quiz/quiz.component'
import Result from './components/Result/result.component'

import './App.scss';

export class App extends Component {

  componentDidMount() {
    this.fetchQuestions()
  }

  fetchQuestions = () => {
    const {fetchQuestionsStart} = this.props
 //   console.log('start again')
    //fetch data from url
    fetchQuestionsStart()
  }

  render(){
    const {route, setTotalQuestions, questions} = this.props

    // if(questions){
    //   console.log('total')
    //   setTotalQuestions(questions.results.length)
    // } 

    return(
      <div className='App'>
        {route === 'home'
          ? <Home/>
          : (
            route === 'quiz'
            ? <Quiz/>
            : <Result/>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = ({quiz: {questions}, progress:{route, totalQuestions}}) => ({
  questions,
  route,
  totalQuestions

});
const mapDispatchToProps = dispatch => ({
  fetchQuestionsStart: () => dispatch(fetchQuestionsStart()),
  setTotalQuestions: total => dispatch(setTotalQuestions(total))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
