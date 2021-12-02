import { render, screen } from '@testing-library/react';
import App from './App';

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

describe('Operaciones matemáticas', () => {
    test('Realizamos la suma', () => {
        expect(sumar(1,1)).toBe(2);
    });
    test('Realizamos la resta', () => {
        expect(restar(1,1)).toBe(0);
    });
    test('Realizamos la multiplicacion', () => {
        expect(multiplicar(1,1)).toBe(1);
    });
    test('Realizamos la division', () => {
        expect(dividir(1,1)).toBe(1);
    });
});
