import styled from "styled-components";

export const ContItem = styled.li`
  width: 340px;
  display: flex;
  gap: 20px;
  background-color: black;
  align-items: center;
  border: 1px solid #121214;
  box-shadow: 0 0 10px rgba(235, 227, 227, 0.1);
  border-radius: 6px;
  padding: 10px 20px;

  @media (max-width: 768px) {
    flex-basis: 100%;
    align-items: center;
  }
  @media (max-width: 428px) {
    width: 282px;
    flex-basis: none;
  }
`;
export const ContP = styled.p`
  font-size: 18px;
  color: white;
  margin-right: auto;
  word-break: break-all;
`;
export const ContBtn = styled.button`
  border-radius: 8px;
  align-items: center;
  background-color: #007bff;
  border: 0;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  max-height: 26px;
  padding: 6px 8px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin-left: auto;

  &:active,
  &:hover {
    outline: 0;
    background-image: linear-gradient(
      144deg,
      #af40ff,
      rgb(91, 66, 243) 50%,
      #00ddeb
    );
  }
`;
