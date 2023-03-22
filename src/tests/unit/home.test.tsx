import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from "../../pages";


describe('Home component', () => {
    test('renders the Home component', () => {
        render(<Home />);
        const headerElement = screen.getByText(/My Todo app/i);
        expect(headerElement).toBeInTheDocument();
    });

    test('adds a new todo item', () => {
        render(<Home />);
        fireEvent.change(screen.getByLabelText('Add a todo'), { target: { value: 'Test todo' } });
        fireEvent.click(screen.getByText('+ Add'));

        expect(screen.getByText('Test todo')).toBeInTheDocument();
    });

    test('does not add an empty todo', () => {
        render(<Home />);
        fireEvent.change(screen.getByLabelText('Add a todo'), { target: { value: '' } });
        fireEvent.click(screen.getByText('+ Add'));

        expect(window.alert).toHaveBeenCalledTimes(1);
        expect(window.alert).toHaveBeenCalledWith('Add a valid todo');
        expect(screen.queryByText('')).not.toBeInTheDocument();
    });

    test('marks a todo item as completed', () => {
        render(<Home />);
        fireEvent.change(screen.getByLabelText('Add a todo'), { target: { value: 'Test todo' } });
        fireEvent.click(screen.getByText('+ Add'));
        fireEvent.click(screen.getByText('Test todo'));

        expect(screen.getByText('Test todo')).toHaveClass('line-through');
    });

    test('clears completed todos', () => {
        render(<Home />);
        fireEvent.change(screen.getByLabelText('Add a todo'), { target: { value: 'Test todo 1' } });
        fireEvent.click(screen.getByText('+ Add'));
        fireEvent.change(screen.getByLabelText('Add a todo'), { target: { value: 'Test todo 2' } });
        fireEvent.click(screen.getByText('+ Add'));
        fireEvent.click(screen.getByText('Test todo 1'));
        fireEvent.click(screen.getByText('Clear completed'));

        expect(screen.queryByText('Test todo 1')).not.toBeInTheDocument();
        expect(screen.getByText('Test todo 2')).toBeInTheDocument();
    });
});
