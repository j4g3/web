import styled from "styled-components";
import { darken } from "polished";

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
  padding: 5%;
`;
export const ButtonsQuestion = styled.button`
  background: ${darken(0.2, "#bdb2ff")};
  border: 1px solid ${darken(0.2, "#bdb2ff")};
  padding: 3%;
  box-shadow: 0px 0px 1px 1px ${darken(0.2, "#bdb2ff")};
  transition: 1s;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  &:hover {
    color: ${darken(0.2, "#bdb2ff")};
    background: #bdb2ff;
    box-shadow: 0px 0px 1px 1px #bdb2ff;
    border: 1px solid #bdb2ff;
  }
`;
export const PointsText = styled.span`
  font-size: 110%;
  font-weight: bold;
  padding: 5%;
  text-transform: uppercase;
`;
export const EndText = styled.span`
  font-weight: bold;
  font-size: 150%;
`;
