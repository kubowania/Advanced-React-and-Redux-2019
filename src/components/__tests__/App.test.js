import React from 'react'
import { shallow } from 'enzyme'  //shallow renders just the component and none of its children
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped  //envoke wrapped from beforeEach so we can use it outside of the beforeEach scope

beforeEach(() => {
     wrapped = shallow(<App/>);
})  //beforeEach allows us to add a line of code BEFORE EACH TEST. it is called common setup logic

it('The App shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);

  // Looks inside the div
  // and checks to see if the CommentBox is in there


// expect(div.innerHTML).toContain('Comment Box')

//the statement above is an 'expectation'. xxxx(yyy).xxxx(yyyy); it is a gloval function
//followed by the thing we want to verify in paranthesis. After that we write the matcher
// statement, followed by the value we expect to see in paranthesis. You can always write:
//expect(div.innerHTML).toBeThruthy()
//the one above does not need an expected value.

  // ReactDOM.unmountComponentAtNode(div);

  // This will clean up all the created things in JSDOM
})

it('The App shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
