import { Container, ContainerInfo, HeaderContainer, LogoImg } from "./styles";
import Image from "next/image";
import logoImg from "../../../public/logo.png"
export function Header() {
  return (
    <Container>
      <HeaderContainer>
        <LogoImg>
          <Image
            src={logoImg}
            alt="Entrefarma"
            width={80}
            height={80}
          />
          <div>
            <h1>Entrefarma</h1>
            <span>Farmácia São Luiz</span>
          </div>
        </LogoImg>
        <ContainerInfo>
          <div>
            <h1>Farmácia de Manipulação</h1>
            <span>(37)3228-1000</span>
          </div>
        </ContainerInfo>
      </HeaderContainer>
    </Container>
  )
}