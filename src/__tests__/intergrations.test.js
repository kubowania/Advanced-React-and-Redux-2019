import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'


// FAKING REQUESTS WITH MOXIOS
//this test is outside axios get requests api request. we need to fake the axios request too.
// If you want to test an API request, the test are usually written outside of there API
//request scope as we are doing it in the command line environment. This means you will not
//get the data. We need to fake an axios request in our test, using a library called ‘Moxios’.
// Moxios gives mock data instead of axios requests. it axes the requests and sends fake data instead.

//an integration test tests many many parts of the project in one go

//  moxios.install(); =>intercepts any request that axios tries to issue
//  moxios.stubRequest => if it sees a request going over to this json api url, it should automatically respond to us with fake status 200 and data
beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', { //this takes TIME, so we need ot make sure this is executed before going ot the next funcitons.
    status: 200,
    response: [{ name: 'Fetched #1'}, { name: 'Fetched #2'}]
  });
});

afterEach(() => {
  moxios.uninstall();
})

it('can fetch a list of comments and display them ', (done) => { //done is a CALLBACK
  // Attempt to render the entire App
const wrapped = mount(
  <Root>
    <App />
  </Root>
)

  // find the 'fetchComments' button by className .fetch-comments and click it
wrapped.find('.fetch-comments').simulate('click'); //simulate in enzyme

  // introduce TINY pause, so that we make sure data is there for us to test.
//setTimeout(() => {
//OR
moxios.wait(() => {
  wrapped.update();

  // expect to find a list of comments
  expect(wrapped.find('li').length).toEqual(2);

  done(); //ths is part of the callback we passed through above. now JEST will know not to consider the above 'done', until this has finished.
  wrapped.unmount();
})



});
