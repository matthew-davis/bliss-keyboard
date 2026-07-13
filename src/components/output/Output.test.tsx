import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Output } from './Output';
import { ELanguage, TMessageState } from '../../types';

it('renders the output without characters', () => {
  const result = render(
    <Output messageState={[]} setMessageState={jest.fn()} language={ELanguage.English} />,
  );
  const output = result.container.querySelector('.outputCharacters');

  expect(output).toBeEmptyDOMElement();
});

it('renders the output with characters', () => {
  const messageState: TMessageState = [
    {
      menuKey: 15214,
      diacriticKey: 3333,
    },
  ];

  const result = render(
    <Output messageState={messageState} setMessageState={jest.fn()} language={ELanguage.English} />,
  );
  const character = result.container.querySelector('.messageSvg');

  expect(character).toContainHTML(
    '<svg class="messageSvg" fill="#111"><use href="#15214" /><use href="#3333" /></svg>',
  );
});

it('disables the clear all button when there is nothing to clear', () => {
  const result = render(
    <Output messageState={[]} setMessageState={jest.fn()} language={ELanguage.English} />,
  );
  const clearAll = result.container.querySelector('#clearAll');

  expect(clearAll).toBeDisabled();
});

it('clears the message state when the clear all button is clicked', () => {
  const messageState: TMessageState = [{ menuKey: 15214, diacriticKey: 3333 }];
  const setMessageState = jest.fn();

  const result = render(
    <Output
      messageState={messageState}
      setMessageState={setMessageState}
      language={ELanguage.English}
    />,
  );
  const clearAll = result.container.querySelector('#clearAll') as HTMLButtonElement;
  fireEvent.click(clearAll);

  expect(setMessageState).toHaveBeenCalledWith([]);
});
