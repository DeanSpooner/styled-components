import styled from "styled-components";

const LoadingSpinner = styled.div`
  left: calc(50% - 25px);
  position: absolute;
  top: 37vh;
  width: 30px;
  height: 30px;
  animation: spin 2s infinite linear;
  background: transparent;
  border: 10px solid red;
  border-radius: 25% 0 25% 0;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      border-color: #f68d00;
    }
    13% {
      border-color: #f68d00;
    }
    25% {
      transform: rotate(90deg);
      border-color: #009aff;
    }
    38% {
      border-color: #009aff;
    }
    50% {
      transform: rotate(180deg);
      border-color: #ff08ab;
    }
    63% {
      border-color: #ff08ab;
    }
    75% {
      transform: rotate(270deg);
      border-color: #62fd5a;
    }
    88% {
      border-color: #62fd5a;
    }
    100% {
      transform: rotate(360deg);
      border-color: #f68d00;
    }
  }
`;

export { LoadingSpinner };
