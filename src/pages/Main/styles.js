import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
  }
  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    color: #fff;
    background: #52d89f;
    border: none;
    border-radius: 3px;
    font-size: 20px;
    font-weight: bold;
    &:hover {
      background: #2fd08a;
    }
  }
`;
