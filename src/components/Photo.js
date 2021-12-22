import styled, { css } from "styled-components";

const Photo = styled.img`
  border: 2px solid #dadada;
  border-radius: 7px;

  &:hover {
    outline: none;
    border-color: #9ecaed;
    box-shadow: 0 0 10px #9ecaed;
  }
`;

const PhotoContainer = styled.div`
  margin-top: 2rem;
`;

const PhotoText = styled.h1`
  ${(props) =>
    css`
      color: ${props.color};
    `};
`;

export { Photo, PhotoContainer, PhotoText };
