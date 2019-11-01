import React from "react";
import Sign from './sign.component'
import { connect } from 'react-redux';

const Answer = ({answer, question}) => (

  <div className='answer'>
    <div className='answer-block'>
      <Sign answer={answer}/>
    </div>
    <div className='answer-block'>
      {question}
    </div>
    
  </div>
);

const mapStateToProps = ({progress:{results}}) => ({
  results
});


export default connect(
  mapStateToProps
)(Answer);