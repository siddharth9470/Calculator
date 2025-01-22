import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('should render number buttons', () => {
    const { getByText } = render(<Calculator />);
    for (let i = 0; i <= 9; i++) {
      expect(getByText(i.toString())).toBeTruthy();
    }
  });

  it('should display pressed numbers', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.press(getByText('5'));
    fireEvent.press(getByText('6'));
    expect(getByTestId('display').props.value).toBe('56');
  });

  it('should perform multiplication', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.press(getByText('9'));
    fireEvent.press(getByText('*'));
    fireEvent.press(getByText('5'));
    fireEvent.press(getByText('='));
    expect(getByTestId('display').props.value).toBe('45');
  });

  it('should perform division', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.press(getByText('8'));
    fireEvent.press(getByText('/'));
    fireEvent.press(getByText('2'));
    fireEvent.press(getByText('='));
    expect(getByTestId('display').props.value).toBe('4');
  });

  it('should perform subtraction', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.press(getByText('6'));
    fireEvent.press(getByText('-'));
    fireEvent.press(getByText('1'));
    fireEvent.press(getByText('='));
    expect(getByTestId('display').props.value).toBe('5');
  });

  it('should perform addition', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.press(getByText('4'));
    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('0'));
    fireEvent.press(getByText('='));
    expect(getByTestId('display').props.value).toBe('4');
  });

  it('should render operation buttons', () => {
    const { getByText } = render(<Calculator />);
    const operations = ['+', '-', '*', '/', '='];
    operations.forEach(op => {
      expect(getByText(op)).toBeTruthy();
    });
  });

  it('should click clear', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.press(getByText('Clear'));
    expect(getByTestId('display').props.value).toBe('');
  });
});