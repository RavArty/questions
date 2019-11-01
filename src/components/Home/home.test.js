import React from 'react';
import { shallow } from 'enzyme';
import { Home }  from './home.component';

describe('Home component', () => {

  describe('Button', () => {
    it('should render Button - BEGIN', () => {
      const mockProps = {
        totalQuestions: 10
      }
      const wrapper = shallow(<Home {...mockProps}/>)
      
      expect(wrapper.find('button').at(0).text()).toBe('BEGIN')
    
    })
  })
})