import styled from "styled-components";

export const BodyDiv = styled.div`
  position: absolute;
  padding-top: 23vh;
  display: flex;
  flex-wrap: wrap;
  background-color: #00539cff;
  @media (max-width: 1200px) {
    padding-top: 280px;
  }
  @media (max-width: 600px) {
    padding-top: 255px;
  }
`;

export const GifDiv = styled.div`
  margin: auto auto 10px;
  border: 3px solid #b87d4b;
  border-radius: 3px;
  width: 320px;
  height: 200px;
  background-image: url(${(props) => props.src});
`;

export const Button = styled.button`
  padding: 5px;
  border: 3px solid #b87d4b;
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 5px;
  cursor: pointer;
  opacity: 0.7;
  @media (max-width: 800px) {
    padding: 10px;
    margin-top: 10px;
  }
  &:hover {
    background-color: #00539cff;
    border: 3px solid #eea47fff;
    color: #eea47fff;
    box-shadow: 5px 5px 15px #b87d4b;
    opacity: initial;
  }
`;
