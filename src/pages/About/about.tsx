import styled from "styled-components";
import profile from "../../assets/img/profile.jpeg"

const Container = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background || "#f7fafc"};
  color: ${({ theme }) => theme.colors.primary || "#1a202c"};
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
  margin-bottom: 32px;
  line-height: 1.6;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

const Button = styled.a`
  text-decoration: none;
  padding: 10px 20px;
  background-color: #0a66c2;
  color: #fff;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary || "#cbd5e0"};
  }
`;

const ContactEmail = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary || "#1a202c"};
`;

const About = () => {
  return (
    <Container>
      <Title>Sobre o Projeto</Title>
      <Description>
        Este projeto foi desenvolvido como uma plataforma para compartilhar
        informações provenientes de sites oficiais do governo, promovendo a
        disseminação de dados confiáveis e acessíveis.
      </Description>

      <ProfileSection>
        <ProfileImage
          src={profile} // Substitua pelo link da sua foto
          alt="Bruno Barretta"
        />
        <Title>Bruno Barretta</Title>
        <LinksContainer>
          <Button href="https://www.linkedin.com/in/bruno-barretta" target="_blank">
            LinkedIn
          </Button>
          <Button href="https://github.com/brunobarretta" target="_blank">
            GitHub
          </Button>
        </LinksContainer>
        <ContactEmail>Contato: bruno.barretta@outlook.com</ContactEmail>
      </ProfileSection>
    </Container>
  );
};

export default About;
