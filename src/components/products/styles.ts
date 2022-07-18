import styled from "styled-components";
import { colors } from "../../constants/colors";

export const ImageProduct = styled.div`
 display: flex;
 justify-content: center;
`
export const Product = styled.div`
  span{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    color: ${colors.gray800};
    font-weight: 600;
  }
  h2{
    margin-top: 0.5rem;
    color: ${colors.black};
    font-size: 1.5rem;
    text-align: center;
  }
`

