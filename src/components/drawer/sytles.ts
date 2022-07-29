import styled from "styled-components"
import { colors } from "../../constants/colors"

export const DrawerContainerItens = styled.div`
  button{
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    color: ${colors.white};
    transition: 0.3s;
    svg{
      margin-right: 0.5rem;
    }
    &:hover{
      color: ${colors.blue}
    }
  }
`