import styled from 'styled-components';

export const Back = styled.div`
  a {
    display: flex;
    color: #000000;

    :hover {
      opacity: 0.7;
    }

    svg {
      margin-right: 0.3rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: darkcyan;
`;

export const Card = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 15px #595B5B;
  background-color: #000000;
  padding: 1rem;

  @media (max-width: 400px) {
    margin: 1rem;
    height: 520px;
  }
`;

export const Image = styled.img`
  width: 800px;
  height: 550px;
  object-fit: cover;

  @media (max-width: 835px) {
    width: 100%;
    height: 500px;
  }

  @media (max-width: 535px) {
    height: 300px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: darkcyan;
`;

export const Span = styled.span`
  color: #ffffff;
`;

export const Type = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: darkcyan;
`;

export const Info = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const InfoContent = styled.div`
  margin: 2rem 0;

  @media (max-width: 400px) {
    margin: 1rem 0;
  }
`;