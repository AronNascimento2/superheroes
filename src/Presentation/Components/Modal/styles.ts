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
    position: fixed;
    left: 23%;
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
    left: 96.9%;
    bottom: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: gray;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  @media(max-width:768px){
    .modal{
      width: 400px;
      left: 1.2%;
      top: 10%;
      padding: 10px;

  }
  .close {
    position: relative;
    left: 89.4%;
    bottom: 60px;}
  }
`;
