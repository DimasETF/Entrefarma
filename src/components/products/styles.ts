import styled from "styled-components";
import { colors } from "../../constants/colors";


export const Product = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 250px;
  img{
    margin: 0 auto;
    
  }
`
export const Categories = styled.div`
   display: flex;
   width: 100%;
   margin-top: 1rem;
   justify-content: space-between;
    span{
      font-size: 1.5rem;
      font-weight: bold;
      color: ${colors.green};
    }
    span + span{
      display: flex;
      padding: 0.5rem;
      color: ${colors.white};
      background-color: ${colors.gray800};
      font-weight: bold;
      font-size: 0.6rem;
      border-radius: 4px;
    }
`
