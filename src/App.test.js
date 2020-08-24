import React from 'react';
import { render, getByPlaceholderText, findByText } from '@testing-library/react';
import App from './App';

test('renders learn react link', async() => {
  const { findByText } = render(<App />);
  const title = await findByText(/Ultima Busqueda/i);
  expect(title).toBeInTheDocument();
});


test("rendering header in App",() =>{
  const {getByText} = render(<App />);
  const header = getByText(/App Home/i);
  expect(header).toBeInTheDocument()
})

test("rendering form element", () => {
  const {getByPlaceholderText} = render(<App />);
  const form = getByPlaceholderText(/Search a gif here/i);
  expect(form).toBeInTheDocument()
})