import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound component', () => {
    it('should match snapshot', () => {
      const { container } = render(<NotFound />);
      expect(container).toMatchSnapshot();
    });

    it('should renders correct info', () => {
        render(<NotFound />);
        const headingElement = screen.getByText("Oops, lo sentimos...");
        const paragraphElement = screen.getByText("No pudimos encontrar ningún producto relacionado con tu búsqueda.");
        
        expect(headingElement).toBeInTheDocument();
        expect(paragraphElement).toBeInTheDocument();
      });

})