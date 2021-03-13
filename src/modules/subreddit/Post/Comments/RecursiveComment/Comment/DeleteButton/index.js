import { func } from 'prop-types';
import { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import styled from 'styled-components';

const StyledButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.125rem;
  cursor: pointer;
  display: flex;
  justify-self: end;
  margin: 0;
  opacity: 0.25;
  padding: 0.125rem 0.25rem;
  transition: 200ms opacity ease-in;

  &:focus,
  &:hover {
    opacity: 1;
  }

  ${({ state }) => {
    switch (state) {
      case states.CONFIRMING:
      case states.DELETING:
        return `
          border: 1px solid red;
          color: red;
          opacity: 1;
        `;
      default:
        return '';
    }
  }}
`;

const states = Object.freeze({
  CONFIRMING: 'CONFIRMING',
  DELETING: 'DELETING',
  IDLE: 'IDLE',
});

const DeleteButton = ({ onDelete }) => {
  const [state, setState] = useState(states.IDLE);

  useEffect(() => {
    let timeout = null;

    if (state === states.CONFIRMING) {
      timeout = setTimeout(() => setState(states.IDLE), 3000);
    }

    return () => clearTimeout(timeout);
  }, [state]);

  const onDeleteProxy = () => {
    switch (state) {
      case states.CONFIRMING:
        setState(states.DELETING);
        onDelete();
        setState(states.IDLE);
        break;
      default:
        setState(states.CONFIRMING);
        break;
    }
  };

  return (
    <StyledButton
      aria-label="Delete comment"
      disabled={state === states.DELETING}
      onClick={onDeleteProxy}
      state={state}
    >
      {state === states.CONFIRMING ? 'Click to Confirm' : <MdDelete />}
    </StyledButton>
  );
};

DeleteButton.propTypes = {
  onDelete: func.isRequired,
};

export { DeleteButton };
