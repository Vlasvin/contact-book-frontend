import styled from "styled-components";

export const ContForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  margin-top: 160px;
  gap: 20px;
  border-radius: 12px;
  border: 1px solid #121214;
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
  padding: 36px 10px;
  background-color: black;

  @media (max-width: 768px) {
    max-width: 300px;
  }
  @media (max-width: 428px) {
    max-width: 200px;
  }
`;

export const ContInput = styled.input`
  border-radius: 12px;
  width: 300px;
  height: 20px;
  margin: 0 auto;
  padding: 8px 14px;

  @media (max-width: 768px) {
    max-width: 200px;
  }
  @media (max-width: 428px) {
    max-width: 100px;
  }
`;
export const AddButton = styled.button`
  border-radius: 12px;
  align-items: center;
  border: 0;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  background-color: #007bff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  line-height: 1em;
  max-width: 120px;
  min-width: 80px;
  padding: 8px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin: 0 auto;

  &:active,
  &:hover {
    outline: 0;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  }
`;

export const TitleContact = styled.h1`
  color: white;
  font-size: 48px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
