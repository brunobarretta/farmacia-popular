import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.background };
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
  margin-bottom: 32px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.white};
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

export const Button = styled.a`
  text-decoration: none;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const ContactEmail = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Name = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;