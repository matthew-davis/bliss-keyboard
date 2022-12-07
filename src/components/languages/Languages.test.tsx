import React from 'react';
import { render, screen } from '@testing-library/react';
import { Languages } from './Languages';
import { ELanguage } from "../../types";
import userEvent from "@testing-library/user-event";

it('renders the language flag icons', () => {
  const language = { languageState: ELanguage.English, setLanguageState: jest.fn() };

  render(<Languages language={language} />);

  expect(screen.getByText('gb.svg')).toBeInTheDocument();
  expect(screen.getByText('se.svg')).toBeInTheDocument();
  expect(screen.getByText('no.svg')).toBeInTheDocument();
  expect(screen.getByText('fi.svg')).toBeInTheDocument();
  expect(screen.getByText('hu.svg')).toBeInTheDocument();
  expect(screen.getByText('de.svg')).toBeInTheDocument();
  expect(screen.getByText('nl.svg')).toBeInTheDocument();
  expect(screen.getByText('za.svg')).toBeInTheDocument();
  expect(screen.getByText('ru.svg')).toBeInTheDocument();
  expect(screen.getByText('lv.svg')).toBeInTheDocument();
  expect(screen.getByText('pl.svg')).toBeInTheDocument();
  expect(screen.getByText('fr.svg')).toBeInTheDocument();
  expect(screen.getByText('es.svg')).toBeInTheDocument();
});

it('clicking another flag changes the language', async () => {
  const user = userEvent.setup()
  const setLanguageState = jest.fn();
  const language = { languageState: ELanguage.English, setLanguageState };

  render(<Languages language={language} />);
  await user.click(screen.getByText('se.svg'));

  expect(setLanguageState).toHaveBeenCalledWith(ELanguage.Swedish)
});
