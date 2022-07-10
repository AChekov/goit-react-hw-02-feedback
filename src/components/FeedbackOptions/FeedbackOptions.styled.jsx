import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  padding: 5px 10px;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: bold;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.5s ease;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    border-radius: 5px;
    background-color: rgb(100, 100, 100);
    box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.3);
    color: white;
    transition: all 0.5s ease;
  }
`;
