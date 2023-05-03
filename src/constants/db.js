// alterado js para json porque as imagens não estavam sendo importadas.
// não sei se uso constants ou templates para ser o nome do arquivo.
import quemSomos from "/assets/posts/quem-somos.png";

// icones
import Acasa from "/assets/posts/a-casa.png";
import reciclagem from "/assets/posts/reciclagem.png";
import mao from "/assets/posts/mao.png";
import urso from "/assets/posts/urso.png";
import educar from "/assets/posts/educar.png";
import blusa from "/assets/posts/blusa.png";
import alimente from "/assets/posts/alimente.png";
import casa from "/assets/posts/casa.png";

// depoimento
import agasalho from "/assets/Video/AgasalhoAmoreVida.mp4";
import acolhido from "/assets/Video/AcolhidoAmoreVida.mp4";
// import "osasco"

export const homepage = {
  id: 1,
  tipo: "",
  titulo: "Quem Somos",
  icone: "",
  imagem: quemSomos,
  resumo:
    "O projeto Amor e Vida surgiu do desejo do fundador e presidente, Pastor Josmar Xavier, de acolher e cuidar de pessoas em situação de rua. O projeto se iniciou com uma casa de acolhimento, que sobrevivia com doações escassas, coleta de recicláveis, e muita fé. A casa modelo república oferecia alimentação, banho, moradia, atendimento psicológico e cursos aos acolhidos...",
  texto:
    "O projeto Amor e Vida surgiu do desejo do fundador e presidente, Pastor Josmar Xavier, de acolher e cuidar de pessoas \n\n em situação de rua. O projeto se iniciou com uma casa de acolhimento, que sobrevivia com doações escassas, coleta de recicláveis, e muita fé. A casa modelo república oferecia alimentação, banho, moradia, atendimento psicológico e cursos aos acolhidos, visando capacitá-los para retornar ao mercado de trabalho e se tornarem independentes. Aos poucos, com muito trabalho, o projeto foi ganhando visibilidade e recebendo mais parceiros. Em 24 de agosto de 2019 foi inaugurado o Galpão de Reciclagem Amor e Vida, com o objetivo de proporcionar dignidade e emancipação de pessoas em situação de rua, catadores de materiais recicláveis, carroceiros, e pessoas em vulnerabilidade social. Os recursos financeiros adquiridos através das doações de recicláveis permitem manter a casa de acolhimento e demais atividades. Após o advento da covid-19, o galpão se tornou um centro de capacitação para pessoas em vulnerabilidade, com oficinas e distribuição de alimentos, além de desenvolver o importante papel da reciclagem. Atualmente o projeto se mantem através de doações financeiras, de alimentos, parcerias, materiais recicláveis, e comercialização de produtos. Hoje podemos dizer que nosso projeto se tornou ambiental, social e econômico!",
};

export const posts = [
  {
    id: 2,
    tipo: "Projeto",
    titulo: "A casa",
    icone: Acasa,
    imagem: quemSomos,
    resumo: "A casa de acolhimento é um lar temporário para homens em situação de vulnerabilidade social.",
    texto:
      "Nossa Casa de acolhimento, como o próprio nome diz, visa acolher as homens em situação de rua e cuidá-los, oferecendo moradia, alimentação, banho, cursos, atendimento médico e psicológico, e encaminhamento ao mercado de trabalho, visando sua ressocialização, para que o acolhido possa se tornar protagonista da sua vida novamente. Nossa casa possui capacidade para apenas 15 pessoas, por isso criamos um processo de triagem para os devidos encaminhamentos.",
  },
  {
    id: 3,
    tipo: "Projeto",
    titulo: "Reciclagem",
    icone: reciclagem,
    imagem: quemSomos,
    resumo:
      "O projeto reciclagem é vinculado a casa de acolhimento de forma a gerar renda e autonomia aos homens acolhidos na casa.",
    texto:
      "O projeto Amor e Vida surgiu do desejo do fundador e presidente, Pastor Josmar Xavier, de acolher e cuidar de pessoas \n\n em situação de rua. O projeto se iniciou com uma casa de acolhimento, que sobrevivia com doações escassas, coleta de recicláveis, e muita fé. A casa modelo república oferecia alimentação, banho, moradia, atendimento psicológico e cursos aos acolhidos, visando capacitá-los para retornar ao mercado de trabalho e se tornarem independentes. Aos poucos, com muito trabalho, o projeto foi ganhando visibilidade e recebendo mais parceiros. Em 24 de agosto de 2019 foi inaugurado o Galpão de Reciclagem Amor e Vida, com o objetivo de proporcionar dignidade e emancipação de pessoas em situação de rua, catadores de materiais recicláveis, carroceiros, e pessoas em vulnerabilidade social. Os recursos financeiros adquiridos através das doações de recicláveis permitem manter a casa de acolhimento e demais atividades. Após o advento da covid-19, o galpão se tornou um centro de capacitação para pessoas em vulnerabilidade, com oficinas e distribuição de alimentos, além de desenvolver o importante papel da reciclagem. Atualmente o projeto se mantem através de doações financeiras, de alimentos, parcerias, materiais recicláveis, e comercialização de produtos. Hoje podemos dizer que nosso projeto se tornou ambiental, social e econômico!",
  },
  {
    id: 4,
    tipo: "Projeto",
    titulo: "Cursos e palestras",
    icone: mao,
    imagem: quemSomos,
    resumo:
      "Os cursos de capacitação sao destinados aos moradores da casa e as suas familias. Acreditamos que a educação e formação mudam vidas. ",
    texto:
      "O projeto Amor e Vida surgiu do desejo do fundador e presidente, Pastor Josmar Xavier, de acolher e cuidar de pessoas \n\n em situação de rua. O projeto se iniciou com uma casa de acolhimento, que sobrevivia com doações escassas, coleta de recicláveis, e muita fé. A casa modelo república oferecia alimentação, banho, moradia, atendimento psicológico e cursos aos acolhidos, visando capacitá-los para retornar ao mercado de trabalho e se tornarem independentes. Aos poucos, com muito trabalho, o projeto foi ganhando visibilidade e recebendo mais parceiros. Em 24 de agosto de 2019 foi inaugurado o Galpão de Reciclagem Amor e Vida, com o objetivo de proporcionar dignidade e emancipação de pessoas em situação de rua, catadores de materiais recicláveis, carroceiros, e pessoas em vulnerabilidade social. Os recursos financeiros adquiridos através das doações de recicláveis permitem manter a casa de acolhimento e demais atividades. Após o advento da covid-19, o galpão se tornou um centro de capacitação para pessoas em vulnerabilidade, com oficinas e distribuição de alimentos, além de desenvolver o importante papel da reciclagem. Atualmente o projeto se mantem através de doações financeiras, de alimentos, parcerias, materiais recicláveis, e comercialização de produtos. Hoje podemos dizer que nosso projeto se tornou ambiental, social e econômico!",
  },
  {
    id: 5,
    tipo: "Projeto",
    titulo: "Doações",
    icone: urso,
    imagem: quemSomos,
    resumo:
      "O projeto é movido por pessoas e por suas doações, seja você também um herói e ajude a transformar vidas. ",
    texto:
      "O projeto Amor e Vida surgiu do desejo do fundador e presidente, Pastor Josmar Xavier, de acolher e cuidar de pessoas \n\n em situação de rua. O projeto se iniciou com uma casa de acolhimento, que sobrevivia com doações escassas, coleta de recicláveis, e muita fé. A casa modelo república oferecia alimentação, banho, moradia, atendimento psicológico e cursos aos acolhidos, visando capacitá-los para retornar ao mercado de trabalho e se tornarem independentes. Aos poucos, com muito trabalho, o projeto foi ganhando visibilidade e recebendo mais parceiros. Em 24 de agosto de 2019 foi inaugurado o Galpão de Reciclagem Amor e Vida, com o objetivo de proporcionar dignidade e emancipação de pessoas em situação de rua, catadores de materiais recicláveis, carroceiros, e pessoas em vulnerabilidade social. Os recursos financeiros adquiridos através das doações de recicláveis permitem manter a casa de acolhimento e demais atividades. Após o advento da covid-19, o galpão se tornou um centro de capacitação para pessoas em vulnerabilidade, com oficinas e distribuição de alimentos, além de desenvolver o importante papel da reciclagem. Atualmente o projeto se mantem através de doações financeiras, de alimentos, parcerias, materiais recicláveis, e comercialização de produtos. Hoje podemos dizer que nosso projeto se tornou ambiental, social e econômico!",
  },
  {
    id: 6,
    tipo: "Camapanha",
    titulo: "Filho de catador pode ser doutor!",
    icone: educar,
    imagem: quemSomos,
    resumo: "Esse campanha incentiva o estudo e o potencial transformador individual. ",
    texto:
      "O projeto Amor e Vida surgiu do desejo do fundador e presidente, Pastor Josmar Xavier, de acolher e cuidar de pessoas \n\n em situação de rua. O projeto se iniciou com uma casa de acolhimento, que sobrevivia com doações escassas, coleta de recicláveis, e muita fé. A casa modelo república oferecia alimentação, banho, moradia, atendimento psicológico e cursos aos acolhidos, visando capacitá-los para retornar ao mercado de trabalho e se tornarem independentes. Aos poucos, com muito trabalho, o projeto foi ganhando visibilidade e recebendo mais parceiros. Em 24 de agosto de 2019 foi inaugurado o Galpão de Reciclagem Amor e Vida, com o objetivo de proporcionar dignidade e emancipação de pessoas em situação de rua, catadores de materiais recicláveis, carroceiros, e pessoas em vulnerabilidade social. Os recursos financeiros adquiridos através das doações de recicláveis permitem manter a casa de acolhimento e demais atividades. Após o advento da covid-19, o galpão se tornou um centro de capacitação para pessoas em vulnerabilidade, com oficinas e distribuição de alimentos, além de desenvolver o importante papel da reciclagem. Atualmente o projeto se mantem através de doações financeiras, de alimentos, parcerias, materiais recicláveis, e comercialização de produtos. Hoje podemos dizer que nosso projeto se tornou ambiental, social e econômico!",
  },
  {
    id: 7,
    tipo: "Campanha",
    titulo: "Aqueça uma família",
    icone: blusa,
    imagem: quemSomos,
    resumo: "Traga a sua doação! Estamos recebendo roupas e calçados em bom estado. ",
    texto:
      "O projeto Amor e Vida surgiu do desejo do fundador e presidente, Pastor Josmar Xavier, de acolher e cuidar de pessoas \n\n em situação de rua. O projeto se iniciou com uma casa de acolhimento, que sobrevivia com doações escassas, coleta de recicláveis, e muita fé. A casa modelo república oferecia alimentação, banho, moradia, atendimento psicológico e cursos aos acolhidos, visando capacitá-los para retornar ao mercado de trabalho e se tornarem independentes. Aos poucos, com muito trabalho, o projeto foi ganhando visibilidade e recebendo mais parceiros. Em 24 de agosto de 2019 foi inaugurado o Galpão de Reciclagem Amor e Vida, com o objetivo de proporcionar dignidade e emancipação de pessoas em situação de rua, catadores de materiais recicláveis, carroceiros, e pessoas em vulnerabilidade social. Os recursos financeiros adquiridos através das doações de recicláveis permitem manter a casa de acolhimento e demais atividades. Após o advento da covid-19, o galpão se tornou um centro de capacitação para pessoas em vulnerabilidade, com oficinas e distribuição de alimentos, além de desenvolver o importante papel da reciclagem. Atualmente o projeto se mantem através de doações financeiras, de alimentos, parcerias, materiais recicláveis, e comercialização de produtos. Hoje podemos dizer que nosso projeto se tornou ambiental, social e econômico!",
  },
  {
    id: 8,
    tipo: "Campanha",
    titulo: "Alimente uma vida",
    icone: alimente,
    imagem: quemSomos,
    resumo: "Campanha Alimente uma vida onde a sua solidariedade é um prato cheio. ",
    texto:
      "O projeto Amor e Vida surgiu do desejo do fundador e presidente, Pastor Josmar Xavier, de acolher e cuidar de pessoas \n\n em situação de rua. O projeto se iniciou com uma casa de acolhimento, que sobrevivia com doações escassas, coleta de recicláveis, e muita fé. A casa modelo república oferecia alimentação, banho, moradia, atendimento psicológico e cursos aos acolhidos, visando capacitá-los para retornar ao mercado de trabalho e se tornarem independentes. Aos poucos, com muito trabalho, o projeto foi ganhando visibilidade e recebendo mais parceiros. Em 24 de agosto de 2019 foi inaugurado o Galpão de Reciclagem Amor e Vida, com o objetivo de proporcionar dignidade e emancipação de pessoas em situação de rua, catadores de materiais recicláveis, carroceiros, e pessoas em vulnerabilidade social. Os recursos financeiros adquiridos através das doações de recicláveis permitem manter a casa de acolhimento e demais atividades. Após o advento da covid-19, o galpão se tornou um centro de capacitação para pessoas em vulnerabilidade, com oficinas e distribuição de alimentos, além de desenvolver o importante papel da reciclagem. Atualmente o projeto se mantem através de doações financeiras, de alimentos, parcerias, materiais recicláveis, e comercialização de produtos. Hoje podemos dizer que nosso projeto se tornou ambiental, social e econômico!",
  },
  {
    id: 9,
    tipo: "Campanha",
    titulo: "Quem cata merece casa",
    icone: casa,
    imagem: quemSomos,
    resumo: "Objetivo de arrecadar materiais para construção para catadores em situação crítica. ",
    texto:
      "O projeto Amor e Vida surgiu do desejo do fundador e presidente, Pastor Josmar Xavier, de acolher e cuidar de pessoas \n\n em situação de rua. O projeto se iniciou com uma casa de acolhimento, que sobrevivia com doações escassas, coleta de recicláveis, e muita fé. A casa modelo república oferecia alimentação, banho, moradia, atendimento psicológico e cursos aos acolhidos, visando capacitá-los para retornar ao mercado de trabalho e se tornarem independentes. Aos poucos, com muito trabalho, o projeto foi ganhando visibilidade e recebendo mais parceiros. Em 24 de agosto de 2019 foi inaugurado o Galpão de Reciclagem Amor e Vida, com o objetivo de proporcionar dignidade e emancipação de pessoas em situação de rua, catadores de materiais recicláveis, carroceiros, e pessoas em vulnerabilidade social. Os recursos financeiros adquiridos através das doações de recicláveis permitem manter a casa de acolhimento e demais atividades. Após o advento da covid-19, o galpão se tornou um centro de capacitação para pessoas em vulnerabilidade, com oficinas e distribuição de alimentos, além de desenvolver o importante papel da reciclagem. Atualmente o projeto se mantem através de doações financeiras, de alimentos, parcerias, materiais recicláveis, e comercialização de produtos. Hoje podemos dizer que nosso projeto se tornou ambiental, social e econômico!",
  },
];

export const testimonials = [
  {
    id: 10,
    titulo: "Aluisio da silva",
    campanha: "Camapanha do Agasalho",
    video: agasalho,
    resumo: "Depoimentos de acolhidos pelo projeto incentivando a campanha do agasalho",
    texto: "",
  },
  {
    id: 11,
    titulo: "Marcus Kleiton Pereida",
    campanha: "Depoimento de Acolhido",
    video: acolhido,
    resumo: "Depoimento de acolhido exaltando a importância do projeto para a comunidade",
    texto: "",
  },
];
