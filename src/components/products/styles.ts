import styled from "styled-components";
import { colors } from "../../constants/colors";


export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  max-width: 250px;
  div{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    span{
      font-size: 1.2rem;
      color: ${colors.gray800};
    }
    strong{
      font-size: 1.5rem;
      color: ${colors.green};
    }
    strong + span{
      font-size: 0.875rem;
      text-align: justify;
      color: ${colors.gray};
    }
  }
  
`

