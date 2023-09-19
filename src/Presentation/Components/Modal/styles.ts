import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal {
    background-color: #fff;
    padding: 20px;
    z-index: 1000; /* Coloca o modal na frente do backdrop */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Sombra */
    height: 600px;
    position: fixed;
    left: 25%;
    top: 20%;

    width: auto;
  }
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo com transparência */
    z-index: 999; /* Coloca o backdrop na frente de outros elementos */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close {
    position: relative;
    left: 97%;
    bottom: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: gray;
  }
`;
