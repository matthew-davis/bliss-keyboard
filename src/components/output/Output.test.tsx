import React from 'react';
import { render } from '@testing-library/react';
import { Output } from './Output';
import { TMessageState } from '../../types';

it('renders the output without characters', () => {
  const result = render(<Output messageState={[]} />);
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

  const result = render(<Output messageState={messageState} />);
  const character = result.container.querySelector('.messageSvg');

  expect(character).toContainHTML(
    '<svg class="messageSvg" fill="#111"><use href="#15214" /><use href="#3333" /></svg>',
  );
});
