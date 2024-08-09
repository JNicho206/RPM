import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { About, Default, Research, OurTeam } from '../pages/About';

describe('About Page', () => {
    test('renders default page', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <About />
            </MemoryRouter>
        );
        const headingElement = screen.getByRole('heading', { name: /about/i });
        expect(headingElement).toBeInTheDocument();
    });

    test('renders research page', () => {
        render(
            <MemoryRouter initialEntries={['/research']}>
                <About />
            </MemoryRouter>
        );
        const headingElement = screen.getByRole('heading', { name: /evidence/i });
        expect(headingElement).toBeInTheDocument();
    });

    test('renders our team page', () => {
        render(
            <MemoryRouter initialEntries={['/our-team']}>
                <About />
            </MemoryRouter>
        );
        const headingElement = screen.getByRole('heading', { name: /our team/i });
        expect(headingElement).toBeInTheDocument();
    });

    test('renders default page with correct links', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Default />
            </MemoryRouter>
        );
        const researchLink = screen.getByRole('link', { name: /research/i });
        const ourTeamLink = screen.getByRole('link', { name: /our team/i });
        expect(researchLink).toHaveAttribute('href', '/research');
        expect(ourTeamLink).toHaveAttribute('href', '/our-team');
    });

    // Add more tests for other components and functionality if needed
});