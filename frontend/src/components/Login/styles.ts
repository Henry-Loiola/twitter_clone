import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--secondary);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--outline);
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  color: var(--white);
  text-align: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid var(--gray);
  background-color: var(--search);
  color: var(--white);
  
  &:focus {
    outline: none;
    border-color: var(--twitter);
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: var(--twitter);
  border: none;
  border-radius: 4px;
  color: var(--white);
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--twitter-light-hover);
  }

  &:active {
    background-color: var(--twitter-dark-hover);
  }
`;

export const ErrorMessage = styled.p`
  color: var(--like);
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
`;

export const Link = styled.a`
  color: var(--twitter);
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 20px;
  
  &:hover {
    text-decoration: underline;
  }
`;
