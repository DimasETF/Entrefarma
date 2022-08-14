import styled from "styled-components";
import { colors } from "../../constants/colors";

export const ContainerFooter = styled.section`
  width: 100%;
  margin-top: 2rem;
  padding: 3rem;
  background-color: #BEC2CC;
`
export const FooterTitle = styled.div`
  max-width: 1120px;
  margin: 0 auto;
   h1{
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: ${colors.blue};
    span{
      color: ${colors.blue};
      font-weight: bold;
    }
    margin-bottom: 1rem;
  }
`
export const FooterContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a{
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    gap: 0.3rem;
    font-weight: bold;
    svg{
      min-width: 1.3rem;
      color: ${colors.blue};
      
    }
    &:hover{
      color: ${colors.blue};
      transition: 0.3s;
    }
    @media(max-width: 920px){
      font-size: 1rem;
    }
  }
`

export const CopyContent = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  background-color: #1F1D33;
  color: ${colors.gray};
  padding: 0.7rem;
  width: 100%;
  justify-content: center;
  text-align: center;
  span{
    color: #fff;
  }
  
`