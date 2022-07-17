import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.header`
  padding: 2rem;
  background: ${colors.white};
  h1{
    color: ${colors.blue};
  }
`

export const HeaderContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`

export const LogoImg = styled.div`
  display: flex;
  align-items: center;
`