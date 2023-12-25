import styled from "styled-components";

export const Div = styled.div`
  border-radius: 8px;
  border: 1px solid #121214;
  box-shadow: 0 0 10px rgba(235, 227, 227, 0.1);
  padding: 20px;
  background-color: #e0d3d3f8;
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 60px 20px;

  @media (max-width: 428px) {
    padding: 20px 0;
  }
`;

export const Title = styled.h1`
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const BtnLogout = styled.button`
  border-radius: 6px;
  align-items: center;
  border: 0;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  background-color: grey;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 16px;
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
  margin: 0 auto;

  &:active,
  &:hover {
    outline: 0;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media (max-width: 428px) {
    flex-direction: column;
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
