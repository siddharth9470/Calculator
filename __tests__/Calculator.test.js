import React from 'react';
import { render } from '@testing-library/react-native';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('should render number buttons', () => {
    const { getByText } = render(<Calculator />);
    for (let i = 0; i <= 9; i++) {
      expect(getByText(i.toString())).toBeTruthy();
    }
  });
});