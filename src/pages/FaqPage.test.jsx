import { render, cleanup } from '@testing-library/react';
import FaqPage from './FaqPage';

describe('FAQ Page', () => {
  afterEach(() => cleanup());

  test('should render FAQ Page', () => {
    const { getByTestId } = render(<FaqPage />);
    const page = getByTestId('valid-page');
    expect(page).toBeInTheDocument();
  });

  test('should render FAQ page header', () => {
    const { getByText } = render(<FaqPage />);
    const pageHeader = getByText('Frequently Asked Questions');
    expect(pageHeader).toBeInTheDocument();
  });

  test('should render input', () => {
    const { getByTestId } = render(<FaqPage />);
    const input = getByTestId('valid-input');
    expect(input).toBeInTheDocument();
  });

  test('should render accordions', () => {
    const { getByTestId } = render(<FaqPage />);
    const page = getByTestId('valid-accordions');
    expect(page).toBeInTheDocument();
  });
});
