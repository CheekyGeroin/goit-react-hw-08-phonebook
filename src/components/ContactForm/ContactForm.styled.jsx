import styled from '@emotion/styled';

export const Form = styled.form`
  box-shadow: 2px 2px 20px 0 rgba(151,152,153,0.5);
  max-width: 300px;
  padding: 10px 20px;
  border-radius:10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  font-size: 20px;
  line-height: 1.3;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 5px 10px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color:#31c902;
    box-shadow: 2px 2px 10px 0 rgba(151,152,153,0.5);
  }
`;
