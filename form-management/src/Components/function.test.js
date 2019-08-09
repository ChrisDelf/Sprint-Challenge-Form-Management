
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, act } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";// allows us unmount components after each test.
import FormikUserForm from './UserForm.js';
import UserCard from './UserCard.js';
import {Card} from '@material-ui/core';
import "@testing-library/react/cleanup-after-each";
import {add} from './functionTest.js'





describe('add', () => {
  it('should return the sum of numbers', () => {
  expect(add(2, 2)).toBe(4);


  })

})
