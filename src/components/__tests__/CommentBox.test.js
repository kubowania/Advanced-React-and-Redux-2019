import React from 'react';
import { mount } from 'enzyme' //for full rendering API
import CommentBox from 'components/CommentBox'
import Root from 'Root'

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
}) //takes the compoent out of the DOM strcutre, so it doesnt interfere with other tests


it('has a text area and two buttons', () => {
   //inside of our wrapped components
  console.log(wrapped.find('textarea'));
  console.log(wrapped.find('button'));
  expect(wrapped.find('textarea').length).toEqual(1); //find textarea and check its only 1
  expect(wrapped.find('button').length).toEqual(2);
})

describe('the text area', () => { //used to group the 2 tests below together
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment'}
    })
  })

  it('has a text area that users can type in', () => {
    wrapped.update();  //updates the dom with our simulation
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  })


  it('when form is submitted, textarea gets emptied', () => {
    wrapped.update(); //updates the dom with our simulation
    wrapped.find('form').simulate('submit') //simuluate submitting the form.
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual(''); //check the textarea is empty after submitting - hence empty string
  })
})
