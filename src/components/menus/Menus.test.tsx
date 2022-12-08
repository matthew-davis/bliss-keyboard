import React from 'react';
import { render, screen } from '@testing-library/react';
import { Menus } from './Menus';
import { ELanguage } from '../../types';

it('renders the menu icon', () => {
  const language = ELanguage.English;
  const menuState = { menuKey: 1000, diacriticKey: 0 };

  const result = render(<Menus language={language} menuState={menuState} />);
  const icon = result.container.querySelector("[data-icon='bars']") as HTMLImageElement;

  expect(icon).toBeInTheDocument();
});

describe('tests in the English language', () => {
  it('renders the home menu name in English', () => {
    const language = ELanguage.English;
    const menuState = { menuKey: 1000, diacriticKey: 0 };

    render(<Menus language={language} menuState={menuState} />);

    expect(screen.getByText('Home menu')).toBeInTheDocument();
  });

  it('renders the character menu name in English', () => {
    const language = ELanguage.English;
    const menuState = { menuKey: 15214, diacriticKey: 0 };

    render(<Menus language={language} menuState={menuState} />);

    expect(screen.getByText('Long verticals menu')).toBeInTheDocument();
  });

  it('renders the diacritic menu name in English', () => {
    const language = ELanguage.English;
    const menuState = { menuKey: 15214, diacriticKey: 15214 };

    render(<Menus language={language} menuState={menuState} />);

    expect(screen.getByText('Long verticals menu (Diacritics)')).toBeInTheDocument();
  });
});

describe('tests in the Swedish language', () => {
  it('renders the home menu name in Swedish', () => {
    const language = ELanguage.Swedish;
    const menuState = { menuKey: 1000, diacriticKey: 0 };

    render(<Menus language={language} menuState={menuState} />);

    expect(screen.getByText('Hemmeny')).toBeInTheDocument();
  });

  it('renders the character menu name in Swedish', () => {
    const language = ELanguage.Swedish;
    const menuState = { menuKey: 15214, diacriticKey: 0 };

    render(<Menus language={language} menuState={menuState} />);

    expect(screen.getByText('Lång vertikal meny')).toBeInTheDocument();
  });

  it('renders the diacritic menu name in Swedish', () => {
    const language = ELanguage.Swedish;
    const menuState = { menuKey: 15214, diacriticKey: 15214 };

    render(<Menus language={language} menuState={menuState} />);

    expect(screen.getByText('Lång vertikal meny (Diakritiska tecken)')).toBeInTheDocument();
  });
});
