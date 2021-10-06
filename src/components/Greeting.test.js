import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('<Greeting component', () => {
  test('Render "Hello World!" as a text', () => {
    //Arrange part
    render(<Greeting />);

    //Act
    //.. we dont need to execute an action like button click

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');

    expect(helloWorldElement).toBeInTheDocument();
  });

  test('Render "It\'s good to see you!" as text when button is not clicked', () => {
    //Arrange
    render(<Greeting />);
    //Assert
    const textOnDom = screen.getByText("It's good to see you!");
    expect(textOnDom).toBeInTheDocument();
  });

  test('Renders "Changed!" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const textOnDom = screen.getByText('Changed!');
    expect(textOnDom).toBeInTheDocument();
  });
  test('Wont render "It\'s good to see you!" when button is clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const textOnDom = screen.queryByText("It's good to see you!");
    expect(textOnDom).toBeNull();
  });
});
