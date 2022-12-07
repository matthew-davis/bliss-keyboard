import React from 'react';
import { render, screen } from '@testing-library/react';
import { Definitions } from './Definitions';
import {ELanguage} from "../../types";

it('renders the comment icon', () => {
  const language = ELanguage.English;
  const hoveredKey = undefined;

  const result = render(<Definitions language={language} hoveredKey={hoveredKey} />);
  const icon = result.container.querySelector("[data-icon='comment']") as HTMLImageElement;

  expect(icon).toBeInTheDocument();
});

it('renders Definitions with no key hovered', () => {
  const language = ELanguage.English;
  const hoveredKey = undefined;

  const result = render(<Definitions language={language} hoveredKey={hoveredKey} />);
  const definition = result.container.querySelector('.definitions');

  expect(definition).toBeEmpty();
});

describe('tests in the English language', () => {
  it('renders Definitions with a menu key hovered', () => {
    const language = ELanguage.English;
    const hoveredKey = { menuKey: 1000, diacriticKey: 0, menuCharacter: 15214 };

    render(<Definitions language={language} hoveredKey={hoveredKey} />);

    expect(screen.getByText('line, stripe')).toBeInTheDocument();
  });

  it('renders Definitions with a character key hovered', () => {
    const language = ELanguage.English;
    const hoveredKey = { menuKey: 15214, diacriticKey: 0, menuCharacter: 15214 };

    render(<Definitions language={language} hoveredKey={hoveredKey} />);

    expect(screen.getByText('line, stripe')).toBeInTheDocument();
  });

  it('renders Definitions with a diacritic key hovered', () => {
    const language = ELanguage.English;
    const hoveredKey = { menuKey: 15214, diacriticKey: 15214, menuCharacter: 8993 };

    render(<Definitions language={language} hoveredKey={hoveredKey} />);

    expect(screen.getByText('line, stripe')).toBeInTheDocument();
    expect(screen.getByText('indicator (action)')).toBeInTheDocument();
  });

  it('renders Definitions with the no diacritic key hovered', () => {
    const language = ELanguage.English;
    const hoveredKey = { menuKey: 15214, diacriticKey: 15214, menuCharacter: 3333 };

    render(<Definitions language={language} hoveredKey={hoveredKey} />);

    expect(screen.getByText('line, stripe')).toBeInTheDocument();
  });
});

describe('tests in the Swedish language', () => {
  it('renders Definitions with a menu key hovered', () => {
    const language = ELanguage.Swedish;
    const hoveredKey = { menuKey: 1000, diacriticKey: 0, menuCharacter: 15214 };

    render(<Definitions language={language} hoveredKey={hoveredKey} />);

    expect(screen.getByText('linje, rad, rand, streck')).toBeInTheDocument();
  });

  it('renders Definitions with a character key hovered', () => {
    const language = ELanguage.Swedish;
    const hoveredKey = { menuKey: 15214, diacriticKey: 0, menuCharacter: 15214 };

    render(<Definitions language={language} hoveredKey={hoveredKey} />);

    expect(screen.getByText('linje, rad, rand, streck')).toBeInTheDocument();
  });

  it('renders Definitions with a diacritic key hovered', () => {
    const language = ELanguage.Swedish;
    const hoveredKey = { menuKey: 15214, diacriticKey: 15214, menuCharacter: 8993 };

    render(<Definitions language={language} hoveredKey={hoveredKey} />);

    expect(screen.getByText('linje, rad, rand, streck')).toBeInTheDocument();
    expect(screen.getByText('operator (handling, infinitiv)')).toBeInTheDocument();
  });

  it('renders Definitions with the no diacritic key hovered', () => {
    const language = ELanguage.Swedish;
    const hoveredKey = { menuKey: 15214, diacriticKey: 15214, menuCharacter: 3333 };

    render(<Definitions language={language} hoveredKey={hoveredKey} />);

    expect(screen.getByText('linje, rad, rand, streck')).toBeInTheDocument();
  });
});
