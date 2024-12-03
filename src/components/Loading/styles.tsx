import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  100% {
    transform: translateY(-10px);
  }
`;

export const Loader = styled.div`
    display: flex;
    gap: 10px;
`;

export const Dot = styled.div`
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    animation: ${bounce} 0.5s infinite alternate;

    &:nth-child(2) {
        animation-delay: 100ms;
    }

    &:nth-child(3) {
        animation-delay: 200ms;
    }
`;
