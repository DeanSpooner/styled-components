import styled from "styled-components";

const Letter = styled.div`
  width: 100px;
  height: 100px;
  line-height: 100px;
  flex-grow: 1;
  background: #fff;
  margin: 10px;
  font-size: 3rem;
  border-radius: 25px;
  &:hover {
    animation: hover 1s infinite;
    cursor: pointer;
  }

  @keyframes hover {
    0% {
      background: #fff;
    }
    50% {
      background: #9ecaed;
      box-shadow: 0 0 10px #ba8b00;
    }
    100% {
      background: #fff;
      box-shadow: none;
    }
  }
`;

const LetterContainer = styled.div`
  margin: auto;
  align-items: center;
  margin-top: 2rem;
  padding: 10px;
  width: 90%; /* item width + padding on either side times number of items */
  display: flex;
  flex-wrap: wrap;
`;

export { Letter, LetterContainer };
