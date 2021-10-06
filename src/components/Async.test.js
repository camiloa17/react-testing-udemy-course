import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('<Async component', () => {
  test('Renders posts if request succeeds', async () => {
    //Arrange
    render(<Async />);

    //Assert
    const listItemsElements = await screen.findAllByRole('listitem');

    expect(listItemsElements).not.toHaveLength(0);
  });
});
