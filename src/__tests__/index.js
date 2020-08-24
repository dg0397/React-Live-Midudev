import React from 'react';
import { render , waitForElement, fireEvent,screen, findByText} from '@testing-library/react';
import App from 'App';

test('home work as we expect with first gif', async () => {
  const {container} = render(<App />);
  const gif = await waitForElement(
    () =>  container.querySelector('.Gif')
  )
  expect(gif).toBeVisible()
});

test("searching something in the form", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox");
  const button = await screen.findByRole("button");

  fireEvent.change(input, { target: {value : "Matrix"} });
  fireEvent.click(button)
 
  const title = await screen.findByText(/Matrix/);
  expect(title).toBeVisible()
})