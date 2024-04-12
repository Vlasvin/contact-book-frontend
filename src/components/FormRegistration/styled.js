import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  min-width: 260px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: black;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 12px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  min-width: 100px;
  text-align: center;
  font-weight: bold;
  padding: 0 10px;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

export const ErrorText = styled.div`
  font-size: 14px;
  color: red;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
