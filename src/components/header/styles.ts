import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.header`
  padding: 2rem;
  background: ${colors.white};
 
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
  @media(max-width: 720px){
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
`

export const LogoImg = styled.div`
  display: flex;
  align-items: center;
  div{
    display: flex;
    flex-direction: column;
    h1{
      color: ${colors.blue};
    }
    span{
      color: ${colors.green};
      font-size: 1.3rem;
      margin-top: -7px;
      font-weight: bold;   
      text-align: end;
    }
  }
`

export const ContainerInfo = styled.div`
@media(max-width: 720px){
    display: none;
  }
  div{
    display: flex;
    flex-direction: column;
    h1{
      color: ${colors.blue};
    }
  }
`