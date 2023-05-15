import React from 'react';
import { render, screen } from '@testing-library/react';
import BreadCrumbs from './BreadCrumbs';

describe('BreadCrumbs', () => {
  it('Should match snapshot', () => {
    const categories = ['Category 1', 'Category 2', 'Category 3'];
    const { container } = render(<BreadCrumbs categories={categories} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render categories correctly', () => {
    const categories = ['Category 1', 'Category 2', 'Category 3'];
    render(<BreadCrumbs categories={categories} />);
  
    categories.forEach(category => {
      const categoryElement = screen.getByText(category);
      expect(categoryElement).toBeInTheDocument();
    });
  });

  it('Should render ">" between categories', () => {
    const categories = ['Category 1', 'Category 2', 'Category 3'];
    const { container } = render(<BreadCrumbs categories={categories} />);
    const separators = container.querySelectorAll('.breadcrumbs__item--separator');

    expect(separators.length).toBe(categories.length - 1);
    separators.forEach(separator => {
      expect(separator.textContent).toBe('>');
    });
  });

  it('Should render empty class when categories are empty', () => {
    const categories: any = [];
    const { container } = render(<BreadCrumbs categories={categories} />);
    const breadcrumbsElement = container.querySelector('.breadcrumbs');
    expect(breadcrumbsElement).toHaveClass('empty');
  });
});