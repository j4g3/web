import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  text-align: center;
  padding: 2%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const QuestionSpan = styled.span`
  font-weight: bold;
  font-size: 120%;
  text-transform: uppercase;
`;
export const ButtonsBox = styled.div`
  display: grid;
  padding: 2%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
export const ButtonsQuestion = styled.button`
  background: #bdb2ff;
  border: 1px solid #bdb2ff;
  padding: 3%;
  box-shadow: 0px 0px 1px 1px #bdb2ff;
  transition: 1s;
  text-transform: uppercase;
  color: #fff;
  &:hover {
    background: none;
  }
`;
