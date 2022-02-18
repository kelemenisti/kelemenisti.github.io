import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ReactHookForm } from './ReactHookForm';

test('input fields are enabled', async () => {
  render(<ReactHookForm />);
  const nameInput = screen.getByTestId('name-input');
  expect(nameInput).toBeInTheDocument();
  expect(nameInput).toBeEnabled();
  expect(nameInput).toBeVisible();

  const submitButton = screen.getByTestId('submit');
  fireEvent.submit(submitButton);

  const resultText = await screen.findByTestId('result');
  expect(resultText.innerHTML).toEqual('Result: {"name":"istvan","age":30,"gender":"male","items":["apple","orange"]}');
});
