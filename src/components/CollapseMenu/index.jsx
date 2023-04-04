
import { Accordion } from 'react-bootstrap';
import styles from './CollapseMenu.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CollapseMenu() {
  return (
    <div id="accordion">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Acolhimento</Accordion.Header>
          <Accordion.Body>
            Nesse processo é feito o primeiro contato com a instituição aonde os indivíduos chegam a Casa de Acolhimento, seja por comunicação informal através de pessoas que conhecem o trabalho praticado por ela, pastorais religiosas que realizam essa ação, centro POP, ou quando demonstram seu próprio interesse em mudar de vida. Dado momento de abordagem é feita a identificação pessoal e fornecimento de refeição e possibilidade de higienização pessoal.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Triagem</Accordion.Header>
          <Accordion.Body>
            Ocorre a verificação se o indivíduo possui o real interesse de sair da condição onde se encontra. A partir de então é feita a avaliação com profissionais competentes e capacitados da área medica, psicológica, assistência social para que seja observado e constatado se há conjuntura para que o indivíduo possa adentrar e manter-se na instituição. Caso haja algum impedimento, seja por carência de atendimento especializado na instituição (utilidade de atendimento clinico, hospitalar, dependência química) é feito a opção por intervenção de estabelecimento competente. Integração e socialização: correspondem as atividades realizadas na instituição, além de acompanhamento social e psicológico. Refere-se também aos processos de profissionalização efetuados por cursos com acesso disponibilizadas pela entidade.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Integração e Socialização</Accordion.Header>
          <Accordion.Body>
            São todas as atividades desenvolvidas dentro do projeto, como o acompanhamento social e psicológico. Refere-se também aos processos de profissionalização, cursos e oficinas próprios e de terceiros. Tanto o preparo físico, quanto o psicológico, para que o acolhido possa retornar a sociedade com qualidade de vida.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Encaminhamento</Accordion.Header>
          <Accordion.Body>
            Encaminhamento: é efetuado caso a instituição não disponibilize o intermédio necessário para a permanência do indivíduo na instituição como atendimento médico, internação hospitalar, intervenção de clinica terapêutica para o acompanhamento especifico de dependentes químicos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Reinserção na Sociedade</Accordion.Header>
          <Accordion.Body>
            Em dado momento encontra-se a última instancia praticada pela Casa de Acolhimento Amor e Vida, após os processos de restabelecimento das condições de reintegrar –se a sociedade, a instituição utiliza meios provenientes de parceiros para a recolocação no mercado de trabalho.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}