import styled from "styled-components";

export const Container = styled.div`
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }

  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.3);
    border-top: 4px solid #8257e6;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
