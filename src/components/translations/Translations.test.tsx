import React from 'react';
import { render, screen } from '@testing-library/react';
import { Translations } from './Translations';
import { ELanguage, TMessageState } from '../../types';

it('renders the translations icon', () => {
  const language = ELanguage.English;
  const messageState: TMessageState = [];

  const result = render(<Translations language={language} messageState={messageState} />);
  const icon = result.container.querySelector("[data-icon='language']") as HTMLImageElement;

  expect(icon).toBeInTheDocument();
});

it('renders the translations without translations', () => {
  const language = ELanguage.English;
  const messageState: TMessageState = [];

  const result = render(<Translations language={language} messageState={messageState} />);
  const translations = result.container.querySelector('.translations');

  expect(translations).toBeEmptyDOMElement();
});

it('renders the translations with translations', () => {
  const language = ELanguage.English;
  const messageState: TMessageState = [
    {
      menuKey: 15214,
      diacriticKey: 3333,
    },
  ];

  render(<Translations language={language} messageState={messageState} />);

  expect(screen.getByText('line, stripe')).toBeInTheDocument();
});

it('renders the translations with translations in different language', () => {
  const language = ELanguage.Swedish;
  const messageState: TMessageState = [
    {
      menuKey: 15214,
      diacriticKey: 3333,
    },
  ];

  render(<Translations language={language} messageState={messageState} />);

  expect(screen.getByText('linje, rad, rand, streck')).toBeInTheDocument();
});
