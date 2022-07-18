import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Category = styled.section`
margin-top: 2rem;
max-width: 1120px;
margin: 0 auto;
padding-top: 2rem;


`
export const HeaderCategory = styled.div`
  h1{
    max-width: 1120px;
    margin: 0rem auto;
    padding: 1rem;
    font-size: 1.875rem;
    color: ${colors.blue};
  }
  h1::after{
      display: flex;
      content: "";
      background-color: ${colors.green};
      max-width: 300px;
      height: 0.1rem;
      margin-top: .5rem;
  }
`
export const CategoryItem = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  padding: 2rem;
  max-width: 1220px;
  margin: 0 auto;

  gap: 3rem;
  justify-content: center;
  font-size: 1.25rem; 
`
