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
import agasalho from "/assets/Video/DepoimentoCampanhaAgasalho.mp4";
import acolhido from "/assets/Video/AcolhidoAmoreVida.mp4";
// import "osasco"

export const homepage = {
  titulo: "Quem somos",
  imagem: quemSomos,
  resumo:
    "O projeto Amor e Vida surgiu do desejo do fundador e presidente, Pastor Josmar Xavier, de acolher e cuidar de pessoas em situação de rua. O projeto se iniciou com uma casa de acolhimento, que sobrevivia com doações escassas, coleta de recicláveis, e muita fé. A casa modelo república oferecia alimentação, banho, moradia, atendimento psicológico e cursos aos acolhidos...",
  texto:
    "O projeto Amor e Vida surgiu do desejo do fundador e presidente, Pastor Josmar Xavier, de acolher e cuidar de pessoas \n\n em situação de rua. O projeto se iniciou com uma casa de acolhimento, que sobrevivia com doações escassas, coleta de recicláveis, e muita fé. A casa modelo república oferecia alimentação, banho, moradia, atendimento psicológico e cursos aos acolhidos, visando capacitá-los para retornar ao mercado de trabalho e se tornarem independentes. Aos poucos, com muito trabalho, o projeto foi ganhando visibilidade e recebendo mais parceiros. Em 24 de agosto de 2019 foi inaugurado o Galpão de Reciclagem Amor e Vida, com o objetivo de proporcionar dignidade e emancipação de pessoas em situação de rua, catadores de materiais recicláveis, carroceiros, e pessoas em vulnerabilidade social. Os recursos financeiros adquiridos através das doações de recicláveis permitem manter a casa de acolhimento e demais atividades. Após o advento da covid-19, o galpão se tornou um centro de capacitação para pessoas em vulnerabilidade, com oficinas e distribuição de alimentos, além de desenvolver o importante papel da reciclagem. Atualmente o projeto se mantem através de doações financeiras, de alimentos, parcerias, materiais recicláveis, e comercialização de produtos. Hoje podemos dizer que nosso projeto se tornou ambiental, social e econômico!",
};

export const about = {
  titulo: "A casa",
  imagem: quemSomos,
  resumo: "A casa de acolhimento é um lar temporário para homens em situação de vulnerabilidade social.",
  texto: [
    "O projeto Amor e Vida surgiu do desejo do fundador e presidente, Pastor Josmar Xavier, de acolher e cuidar de pessoas em situação de rua. O projeto se iniciou com uma casa de acolhimento, que sobrevivia com doações escassas, coleta de recicláveis, e muita fé. A casa modelo república oferecia alimentação, banho, moradia, atendimento psicológico e cursos aos acolhidos, visando capacitá-los para retornar ao mercado de trabalho e se tornarem independentes. Aos poucos, com muito trabalho, o projeto foi ganhando visibilidade e recebendo mais parceiros.",
    "Em 24 de agosto de 2019 foi inaugurado o Galpão de Reciclagem Amor e Vida, com o objetivo de proporcionar dignidade e emancipação de pessoas em situação de rua, catadores de materiais recicláveis, carroceiros, e pessoas em vulnerabilidade social. Os recursos financeiros adquiridos através das doações de recicláveis permitem manter a casa de acolhimento e demais atividades. Após o advento da covid-19, o galpão se tornou um centro de capacitação para pessoas em vulnerabilidade, com oficinas e distribuição de alimentos, além de desenvolver o importante papel da reciclagem. Atualmente o projeto se mantem através de doações financeiras, de alimentos, parcerias, materiais recicláveis, e comercialização de produtos. Hoje podemos dizer que nosso projeto se tornou ambiental, social e econômico!",
  ]
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
      "Desde o inicio do projeto as atividades eram mantidas com a renda proveniente da coleta e venda de materiais recicláveis. Hoje estamos mais estruturados, com o nosso Galpão de Reciclagem inaugurado em agosto de 2019, que nos permitiu coletar um maior volume de material, juntamente com nossos parceiros que adotaram a coleta seletiva e nos cedem seus materiais. Recebemos doações dos mais diversos materiais (papelão, vidros, óleo de cozinha, entre outros), que, além de contribuir para a manutenção do projeto, possibilitam também um maior zelo com o meio ambiente. Além disso, os vidros recebidos nas doações são utilizados para fabricação de tijolos, projeto que gera empregos para os acolhidos e incentiva sua emancipação.",
  },
  {
    id: 4,
    tipo: "Projeto",
    titulo: "Cursos e palestras",
    icone: mao,
    imagem: quemSomos,
    resumo:
      "Os cursos de capacitação são destinados aos moradores da casa e as suas familias. Acreditamos que a educação e formação mudam vidas. ",
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
      "Fazemos o repasse de todas as doações que recebemos para pessoas em vulnerabilidade e instituições parceiras. Temos 1200 famílias cadastradas e mensalmente atendemos mais de 450 famílias e damos todo o suporte que está ao nosso alcance. Oferecemos aos nossos assistidos cestas básicas, refeições prontas, roupas e acessórios, frutas e legumes e demais materiais oriundos das doações recebidas. Acreditamos que o repasse das doações é fundamental para que as pessoas que realmente necessitam sejam alcançadas. Atualmente entregamos doações para líderes das comunidades dos bairros Itatiaia, Vila Telma, Village, Monte Sião, Vila Sion, Cristo Rei, Olga Benária, Recanto das águas, Cidade industrial, Conjunto Vitoria, Nova Suíça e Bandeirantes.",
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
