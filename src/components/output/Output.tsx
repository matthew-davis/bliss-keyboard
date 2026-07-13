import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TOutputProps } from '../../types';
import { specialKeyLabels, typeCharacters } from '../../utils';
import './output.css';

export const Output = (props: TOutputProps): React.ReactElement => {
  const { messageState, setMessageState, language } = props;

  useEffect(() => {
    let show = 'visible';
    const time = 700;
    const cursor: HTMLElement | null = document.getElementById('cursor');

    const cursorBlink = (): void => {
      show = show === 'hidden' ? 'visible' : 'hidden';
      cursor && (cursor.style.visibility = show);
      setTimeout(cursorBlink, time);
    };

    cursorBlink();
  }, []);

  return (
    <div id={'outputWrapper'}>
      <div className={'output'}>
        <div className={'outputCharacters'}>{typeCharacters(messageState)}</div>
        <div id={'cursor'}>&nbsp;</div>
        <button
          id={'clearAll'}
          type={'button'}
          title={specialKeyLabels.clearAll[language]}
          aria-label={specialKeyLabels.clearAll[language]}
          disabled={messageState.length === 0}
          onClick={() => setMessageState([])}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};
