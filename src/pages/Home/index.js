<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
import {
  Container,
  QuestionSpan,
  ButtonsQuestion,
  ButtonsBox,
  EndText,
  PointsText,
} from "./style";
>>>>>>> feature/layout

export default function Home() {
  const [Questions] = useState([
    "Tudo bem compartilhar objetos, tipo o celular, pois o novo coronavírus não se transmite dessa forma.",
    "Não preciso me preocupar em higienizar as compras do mercado, afinal, eu mesmo peguei da prateleira com as mãos limpas.",
    "Os sintomas mais comuns da COVID-19 são: febre, tosse seca e cansaço.",
    "Quando tossir, a melhor coisa a se fazer é cobrir a boca com a mão, afinal, devo evitar contaminar outras pessoas.",
    "Se me sinto bem e tomo todos os cuidados, não tem problema abraçar e beijar as pessoas que amo.",
    "Fazer gargarejo com água morna, sal e vinagre previne infecção.",
    "Usando máscara não é possível ser infectado.",
    "A COVID-19 é mais perigosa para indivíduos acima dos 60 anos ou debilitados, portadores de doenças crônicas e crianças.",
    "É possível estar com a COVID-19 por até 14 dias antes de apresentar os sintomas.",
    "O novo coronavírus não afeta crianças.",
    "Devo procurar o hospital quando estiver espirrando.",
    "É melhor evitar ir ao hospital, mesmo que pra controlar doenças crônicas, e diminuir as chances de exposição ao vírus.",
  ]);
  const [Response] = useState([
    "False",
    "False",
    "True",
    "False",
    "False",
    "False",
    "True",
    "False",
    "True",
    "False",
    "False",
    "False",
  ]);
  const [Options] = useState(["Real", "Falso"]);
  let [points, setPoints] = useState(0);
  function Validator(QuestionID, answer) {
    // eslint-disable-next-line
    switch (answer) {
      case "Real":
        if (Response[QuestionID]) {
          if (Response[QuestionID] === "True") {
            setPoints((points += 1));
          } else {
            if (points <= 0) {
              setPoints(0);
            } else {
              setPoints((points -= 1));
            }
          }
          break;
        }
      // eslint-disable-next-line
      case "Falso":
        if (Response[QuestionID]) {
          if (Response[QuestionID] === "False") {
            setPoints((points += 1));
          } else {
            if (points <= 0) {
              setPoints(0);
            } else {
              setPoints((points -= 1));
            }
          }
          break;
        }
    }
  }

  return (
    <Container>
      {points < 12 && (
        <>
          <PointsText>Pontos - {points}</PointsText>
          <QuestionSpan>{Questions[points]}</QuestionSpan>
          <ButtonsBox>
            {Options.map((i) => (
              <ButtonsQuestion
                key={i}
                onClick={() => {
                  Validator(points, i);
                }}
              >
                {i}
              </ButtonsQuestion>
            ))}
          </ButtonsBox>
        </>
      )}
      {points >= 12 && <EndText>Parabéns você chegou ao final!</EndText>}
    </Container>
  );
}
