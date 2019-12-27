import React from 'react';
import { mount } from 'enzyme';

import Root from 'root'
import CommentList from 'components/CommentList'

let wrapped

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  }

  wrapped = mount(
    <Root initialState ={ initialState }>
      <CommentList/>
    </Root>
  )
})

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})


it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('Comment 1') // this uses enzyme render and text - you can read documentation online
  expect(wrapped.render().text()).toContain('Comment 2') // this uses enzyme render and text
})
