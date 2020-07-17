import React, { useState } from "react";
import { Container, QuestionSpan, ButtonsQuestion, ButtonsBox } from "./style";

export default function Home() {
  const [Questions] = useState([
    "Tudo bem compartilhar objetos, tipo o celular, pois o novo coronavírus não se transmite dessa forma.",
    "Não preciso me preocupar em higienizar as compras do mercado, afinal, eu mesmo peguei da prateleira com as mãos limpas.",
    "Quando tossir, a melhor coisa a se fazer é cobrir a boca com a mão, afinal, devo evitar contaminar outras pessoas.",
    "Se me sinto bem e tomo todos os cuidados, não tem problema abraçar e beijar as pessoas que amo.",
    "Os sintomas mais comuns da COVID-19 são: febre, tosse seca e cansaço.",
    "É possível estar com a COVID-19 por até 14 dias antes de apresentar os sintomas.",
    "Fazer gargarejo com água morna, sal e vinagre previne infecção.",
    "Usando máscara não é possível ser infectado.",
    "A COVID-19 é mais perigosa para indivíduos acima dos 60 anos ou debilitados, portadores de doenças crônicas e crianças.",
    "O novo coronavírus não afeta crianças.",
    "Devo procurar o hospital quando estiver espirrando.",
    "É melhor evitar ir ao hospital, mesmo que pra controlar doenças crônicas, e diminuir as chances de exposição ao vírus.",
  ]);
  const [Response] = useState([
    "Fake",
    "Fake",
    "Fake",
    "Fake",
    "Fato",
    "Fato",
    "Fato",
    "Fake",
    "Fake",
    "Fake",
    "Fake",
    "Fake",
  ]);

  return (
    <Container>
      <QuestionSpan>{Questions[0]}</QuestionSpan>
      <ButtonsBox>
        <ButtonsQuestion>Real</ButtonsQuestion>
        <ButtonsQuestion>Falso</ButtonsQuestion>
      </ButtonsBox>
    </Container>
  );
}
