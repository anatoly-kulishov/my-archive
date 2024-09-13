import { fireEvent, render, screen } from '@testing-library/react';
import { Osago } from './Osago';
import { useNavigate } from 'react-router-dom';
import { BACK_BUTTON, SEND_CALCULATE_BUTTON } from '@/features';

jest.mock('react-router-dom');

const mockedNavigate = jest.spyOn({ useNavigate }, 'useNavigate');
const navigate = jest.fn();
const calculationsPolicy = jest.fn();

describe('calculate Dms', () => {
  test('should correctly render', () => {
    mockedNavigate.mockReturnValue(navigate);
    render(<Osago calculationsPolicy={calculationsPolicy} />);
    expect(screen.getAllByTestId('inputBase')).toHaveLength(7);
    expect(screen.getByText(BACK_BUTTON)).toBeInTheDocument();
    expect(screen.getByText(SEND_CALCULATE_BUTTON)).toBeInTheDocument();
  });
  test('should correctly work', () => {
    mockedNavigate.mockReturnValue(navigate);
    render(<Osago calculationsPolicy={calculationsPolicy} />);
    const inputs = screen.getAllByTestId('inputBase');

    fireEvent.click(screen.getByText(BACK_BUTTON));
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(-1);

    const yearOfRelease = inputs[2];
    fireEvent.input(yearOfRelease, {
      target: { value: '2000' },
    });
    expect(yearOfRelease).toContainHTML('2000');

    const mileage = inputs[3];
    fireEvent.input(mileage, {
      target: { value: '9990' },
    });
    expect(mileage).toContainHTML('9990');

    const driversAge = inputs[4];
    fireEvent.input(driversAge, {
      target: { value: '20' },
    });
    expect(driversAge).toContainHTML('20');

    const driversExperience = inputs[5];
    fireEvent.input(driversExperience, {
      target: { value: '10000' },
    });
    expect(driversExperience).toContainHTML('10000');

    const driversYearWithoutAccident = inputs[6];
    fireEvent.input(driversYearWithoutAccident, {
      target: { value: '10' },
    });
    expect(driversYearWithoutAccident).toContainHTML('10');
  });
});
