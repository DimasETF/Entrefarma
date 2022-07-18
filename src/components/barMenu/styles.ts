import styled from "styled-components";
import { colors } from "../../constants/colors";

export const ContainerMenu = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: ${colors.white};
  background-color: ${colors.green};
    span{
      margin-left: 1.5rem;
      @media(max-width: 1080px){
      display: none;
    }
  }
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h1{
      font-size: 1rem;
      color: ${colors.blue};
      margin-bottom: 0.5rem;
    }
      @media(min-width: 720px){
        display: none;
      }
  }
  
`