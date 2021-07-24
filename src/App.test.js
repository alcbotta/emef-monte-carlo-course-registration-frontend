import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import React from 'react';
import {SubmissionResponse} from "@formspree/core/forms";

// jest.mock('axios');
// mock the SubmitHandler??
jest.mock
const init = () => {
  function t(e) {
    console.log(e)
  }
  t.prototype.submit = (e) => {
    console.log(e)
  }
  const mockUseForm = jest.fn().mockImplementation(() => {
    return [
      {
        submitting: false,
        succeeded: false
      },
      t
    ]
  });
  const stantardFixture = <App useForm={mockUseForm} />;
  return stantardFixture;
}

describe("something", () => {


  test('renders learn react link 1 ', () => {


    render (init());
    // const linkElement = screen.getByText(/learn react/i);
    expect(screen).toBeDefined();
  });
  test('renders learn react link 2 ', () => {
    render (init());

    const button = screen.getByText("Enviar");

    // const linkElement = screen.getByText(/learn react/i);
    expect(button).toBeDefined();
    expect(button).toBeEnabled();
  });
  test('renders learn react link 3 ', () => {

    render (init());

    const button = screen.getByText("Enviar");

    // const linkElement = screen.getByText(/learn react/i);
    expect(button).toBeDefined();
    expect(button).toBeEnabled();

    act(() => {
      fireEvent.click(button);
    });

    expect(button).toBeEnabled();
  });
  //
  // test('renders learn react link 4', () => {
  //
  //
  //   const container = render(<App />);
  //
  //   const button = screen.getByText("Enviar");
  //
  //
  //   const nameInput =container.container.querySelector('#contact-name');
  //   expect(nameInput).toBeDefined();
  //
  //   const emailInput =container.container.querySelector('#contact-email');
  //   expect(emailInput).toBeDefined();
  //
  //   const pcInput =container.container.querySelector('#contact-personal-computer');
  //   expect(pcInput).toBeDefined();
  //   act(() => {
  //     fireEvent.change(nameInput, { target: { value: 'test' } })
  //     fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
  //     fireEvent.change(pcInput, { target: { value: 'sim' } })
  //
  //     fireEvent.click(button);
  //   });
  //   expect(button).toBeEnabled();
  // });
})

