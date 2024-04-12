import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 428px) {
    padding: 20px 0;
  }
`;

export const Header = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;
  width: 100%;
  background-color: #121214;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;

  @media (max-width: 428px) {
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-left: 40px;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  left: 0;
  font-size: 52px;
  color: white;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const BtnLogout = styled.button`
  border-radius: 6px;
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
  max-width: 100px;
  min-width: 80px;
  padding: 6px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin-right: 40px;

  &:active,
  &:hover {
    outline: 0;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  }
`;
export const MainText = styled.p`
  max-width: 1092px;
  color: white;
  font-size: 52px;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 428px) {
    font-size: 20px;
  }
`;

export const RegLink = styled(Link)`
  color: white;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #007bff;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
  @media (max-width: 428px) {
    flex-direction: row;
  }
`;
export const UserMail = styled.p`
  margin-right: 10px;
  font-size: 18px;

  @media (max-width: 768px) {
    margin-top: 5px;
  }

  @media (max-width: 428px) {
    margin-bottom: 5px;
  }

  background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  -webkit-background-clip: text;
  color: transparent;
`;
