import React from 'react';
import { render, screen } from '@testing-library/react';
import { Search } from './Search';
import { ELanguage } from '../../types';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();
const language = ELanguage.English;
const numberOfResults = 5;
const menuState = { menuKey: 1000, diacriticKey: 0 };
const setMenuState = jest.fn();
const menu = { menuState, setMenuState };
const setHoveredKey = jest.fn();
const messageState = [{ menuKey: 15214, diacriticKey: 3333 }];
const setMessageState = jest.fn();
const message = { messageState, setMessageState };

it('renders the search without a search box or search results', () => {
  const result = render(
    <Search
      language={language}
      numberOfResults={numberOfResults}
      menu={menu}
      setHoveredKey={setHoveredKey}
      message={message}
    />
  );

  const searchResults = result.container.querySelector('.searchOutput');

  expect(screen.getByRole('searchbox')).toBeInTheDocument();
  expect(searchResults).toBeEmptyDOMElement();
});

it('searches for characters and words', async () => {
  const result = render(
    <Search
      language={language}
      numberOfResults={numberOfResults}
      menu={menu}
      setHoveredKey={setHoveredKey}
      message={message}
    />
  );

  await user.type(screen.getByRole('searchbox', { name: '' }), 'mother');
  await user.click(screen.getByRole('button'));
  await user.click(result.container.querySelector('.searchResultWord') as Element);
  expect(setMessageState).toHaveBeenCalled();

  await user.type(screen.getByRole('searchbox', { name: '' }), 'mother');
  await user.click(screen.getByRole('button'));
  await user.click(result.container.querySelector('.searchResultCharacter') as Element);
  expect(setMenuState).toHaveBeenCalled();
});
