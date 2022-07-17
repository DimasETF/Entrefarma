import styled from "styled-components";
import { colors } from "../../constants/colors";

export const ImageProduct = styled.div`
 display: flex;
 justify-content: center;
`
export const Product = styled.div`
  
  span{
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: ${colors.gray};
    font-weight: 600;
  }
  h2{
    margin-top: 1rem;
    color: ${colors.black};
    font-size: 1.5rem;
  }
`

