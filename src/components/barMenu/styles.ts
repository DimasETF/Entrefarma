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
  font-size: 1.4rem;
  @media(max-width: 720px){
    gap: 0;
    span{
      display: none;
    }
  }
  a{
    color: ${colors.white};
    font-weight: bold;
    display: flex;
    align-items: center;
    transition: 0.2s;
    svg{
      margin-right: 1rem;
    }
    &:hover{
      color: ${colors.blue};
    }
  }
`