import profile from "../../assets/img/profile.jpeg"
import { Helmet } from 'react-helmet';
import * as Elements from "./styles";

const About = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Saiba mais sobre o desenvolvedor da aplicação e o propósito do site que facilita o acesso a farmácias populares e medicamentos gratuitos." />
        <title>Sobre o projeto Farmácia Popular</title>
      </Helmet>

      <Elements.Container>
        <Elements.Title>Sobre o Projeto</Elements.Title>
        <Elements.Description>
          Este projeto foi criado para facilitar o acesso às farmácias cadastradas no programa Farmácia Popular, por meio de uma plataforma acessível e confiável. 
          Apesar da importância do programa, ainda não existe uma solução oficial do governo que disponibilize essas informações de forma centralizada e prática, 
          como um mapa interativo. 
          Nosso objetivo é preencher essa lacuna e oferecer uma ferramenta que ajude a população a localizar farmácias de forma simples e eficiente.
        </Elements.Description>

        <Elements.ProfileSection>
          <Elements.ProfileImage
            src={profile}
            alt="Bruno Barretta"
          />
          <Elements.Name>Bruno Barretta</Elements.Name>
          <Elements.LinksContainer>
            <Elements.Button href="https://www.linkedin.com/in/bruno-barretta" target="_blank">
              LinkedIn
            </Elements.Button>
            <Elements.Button href="https://github.com/brunobarretta" target="_blank">
              GitHub
            </Elements.Button>
          </Elements.LinksContainer>
          <Elements.ContactEmail>bruno.barretta@outlook.com</Elements.ContactEmail>
        </Elements.ProfileSection>
      </Elements.Container>
    </>
  );
};

export default About;
