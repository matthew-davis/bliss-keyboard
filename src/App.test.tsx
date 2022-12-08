import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it("renders app with all of it's components", () => {
  const result = render(<App />);
  const output = result.container.querySelector('#outputWrapper');
  const translations = result.container.querySelector('#translationsWrapper');
  const search = result.container.querySelector('#searchWrapper');
  const menus = result.container.querySelector('#menuWrapper');
  const definitions = result.container.querySelector('#definitionsWrapper');
  const languages = result.container.querySelector('#languagesWrapper');
  const keyboard = result.container.querySelector('#keyboardWrapper');

  expect(screen.getByText('characters.svg')).toBeInTheDocument();
  expect(screen.getByText('words.svg')).toBeInTheDocument();
  expect(output).toBeInTheDocument();
  expect(translations).toBeInTheDocument();
  expect(search).toBeInTheDocument();
  expect(menus).toBeInTheDocument();
  expect(definitions).toBeInTheDocument();
  expect(languages).toBeInTheDocument();
  expect(keyboard).toBeInTheDocument();
});
