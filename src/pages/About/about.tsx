import profile from "../../assets/img/profile.jpeg"
import { Helmet } from 'react-helmet';
import * as Elements from "./styles";

const About = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Saiba mais sobre o desenvolvedor da aplicação e o propósito do site que facilita o acesso a farmácias populares e medicamentos gratuitos." />
        <title>Sobre - Farmácia Popular</title>
      </Helmet>

      <Elements.Container>
        <Elements.Title>Sobre o Projeto</Elements.Title>
        <Elements.Description>
          Este projeto foi desenvolvido como uma plataforma para compartilhar
          informações provenientes de sites oficiais do governo, promovendo a
          disseminação de dados confiáveis e acessíveis.
        </Elements.Description>

        <Elements.ProfileSection>
          <Elements.ProfileImage
            src={profile}
            alt="Bruno Barretta"
          />
          <Elements.Title>Bruno Barretta</Elements.Title>
          <Elements.LinksContainer>
            <Elements.Button href="https://www.linkedin.com/in/bruno-barretta" target="_blank">
              LinkedIn
            </Elements.Button>
            <Elements.Button href="https://github.com/brunobarretta" target="_blank">
              GitHub
            </Elements.Button>
          </Elements.LinksContainer>
          <Elements.ContactEmail>Contato: bruno.barretta@outlook.com</Elements.ContactEmail>
        </Elements.ProfileSection>
      </Elements.Container>
    </>
  );
};

export default About;
