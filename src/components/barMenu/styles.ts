import styled from "styled-components";
import { colors } from "../../constants/colors";

export const ContainerMenu = styled.div`
  width: 100%;
  background-color: ${colors.green};
  padding: 1rem;
`

export const ContentBarMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
`

export const ContactItens = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.3rem;
  @media(max-width: 720px){
    gap: 0;
    span{
      display: none;
    }
  }
  a{
    color: ${colors.white};
    font-weight: bold;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    transition: 0.2s;
    svg{
      width: 1.5rem;
      margin-right: 0.3rem;
    }
    &:hover{
      color: ${colors.blue};
    }
  }
`