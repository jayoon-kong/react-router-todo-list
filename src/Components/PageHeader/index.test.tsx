import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import { MemoryRouter } from 'react-router-dom';

import PageHeader from '.';

describe('<PageHeader />', () => {
  it('renders component correctly', () => {
    const path = '/';

    const { container } = render(
      <MemoryRouter initialEntries={[path]}>
        <PageHeader />
      </MemoryRouter>
    );

    const label = screen.getByText('할 일 목록');
    expect(label).toBeInTheDocument();

    const goBack = screen.queryByText('돌아가기');
    expect(goBack).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  })
})