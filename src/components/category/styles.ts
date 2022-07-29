import styled from "styled-components";
import { colors } from "../../constants/colors";
export const Category = styled.section`
  
`
export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  max-width: 1220px;
  margin: 0 auto;
  padding: 2rem;
  justify-content: center;
`
export const HeaderCategory = styled.section`
 width: 100%;
 background-color: ${colors.gray500};
 div{
   max-width: 1220px;
   margin: 0 auto;
 }
`
export const ContentHeaderCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
 
  button{
    color: ${colors.black};
    font-weight: bold;
    font-size: 0.875rem;
    text-transform: uppercase;
    margin-right: 1rem;
    transition: 0.4s;
    &:hover{
      color: ${colors.green};
    }
  }
`

export const Alert = styled.div`
  display: flex;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem;
  @media (max-width: 540px){
    flex-wrap: wrap;
  }
  svg{
    color: ${colors.blue};
  }
  span{
    font-weight: bold;
    color: ${colors.blue};
  }
  button{
    font-weight: bolder;
    color: ${colors.green};
  }
`