import React from 'react';
import { useLocation } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { ToDoListProvider } from 'Contexts/ToDoList';
import Detail from '.';
import { renderWithRouterMatch } from 'renderWithRouterMatch';

describe('<Detail />', () => {
  it('renders component correctly', () => {
    const route = '/detail/0';
    const path = '/detail/:id';
    
    localStorage.setItem('ToDoList', '["ToDo 1"]');

    const view = renderWithRouterMatch(<Detail />, route, path);

    const { container } = render(
      <ToDoListProvider>
        {view}
      </ToDoListProvider>
    );

    const toDoItem = screen.getByText('ToDo 1');
    expect(toDoItem).toBeInTheDocument();

    const button = screen.getByText('삭제');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('deletes ToDo data', () => {
    const route = ['/', '/detail/0'];
    const path = '/detail/:id';
    
    localStorage.setItem('ToDoList', '["ToDo 1"]');

    const TestComponent = () => {
      const { pathname } = useLocation();
      return <div>{pathname}</div>;
    };

    const view = renderWithRouterMatch(<Detail />, route, path, <TestComponent />);

    render(
      <ToDoListProvider>
        {view}
      </ToDoListProvider>
    );

    const url = screen.getByText('/detail/0');
    expect(url).toBeInTheDocument();

    const toDoItem = screen.getByText('ToDo 1');
    expect(toDoItem).toBeInTheDocument();

    const button = screen.getByText('삭제');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(url.textContent).toBe('/');
    expect(toDoItem).not.toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});