import styled from '@emotion/styled';

export const Item = styled.li`
  font-size: 20px;
  line-height: 1.3;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Button = styled.button`
  margin-left: 15px;
  border-radius: 20px;
  border: none;
  padding: 6px 14px;
  font-size: 16px;
  line-height: 1.3;
  cursor: pointer;
  transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color:#b00707;
    box-shadow: 2px 2px 10px 0 rgba(151,152,153,0.5);
  }
`;
