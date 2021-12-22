import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 8px;
  border: 5px solid palevioletred;
  color: palevioletred;
  cursor: pointer;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 1.5rem;
  &:hover {
    outline: none;
    border-color: orangered;
    box-shadow: 0 0 10px orangered;
  }

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
      &:hover {
        outline: none;
        border-color: yellow;
        box-shadow: 0 0 10px yellow;
      }
    `};
`;

const ButtonContainer = styled.div`
  background-color: #000000;
  padding: 2em;
`;

export { Button, ButtonContainer };
