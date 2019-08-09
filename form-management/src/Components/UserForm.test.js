import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, act } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";// allows us unmount components after each test.
import FormikUserForm from './UserForm.js';
import UserCard from './UserCard.js';
import {Card} from '@material-ui/core';

it('can render and login a user', () => {
  act(() => {
  render(<FormikUserForm/>);


})

})


