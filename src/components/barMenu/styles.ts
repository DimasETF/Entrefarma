import styled from "styled-components";
import { colors } from "../../constants/colors";

export const ContainerMenu = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: ${colors.white};
  background-color: ${colors.green};
  div{
    max-width: 1220px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 720px){
      flex-direction: column;
      gap: 0.5rem;
    }
    a{
      font-size: 1.5rem;
      margin-right: 1rem;
      font-weight: bold;
      &:hover{
        color: ${colors.blue};
        transition: 0.3s;
      }
    }
    span{
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  }
  
`