import React from 'react';
import { mount, shallow } from 'enzyme';
import LoginPage from './LoginPage';
import LoginForm from './LoginForm';
import { Root } from '../../../index';

let wrapped;

it('has rendering Login Page with div tag', () => {
  wrapped = mount(Root(<LoginPage authToken="false" validateAuth={() => {}} />));

  expect(wrapped.find('div').length).toEqual(2);
});

it('has Login Form', () => {
  wrapped = mount(Root(<LoginPage authToken="false" validateAuth={() => {}} />));
  console.log(wrapped.render().children());
});
