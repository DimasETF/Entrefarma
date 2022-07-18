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
            <span>Nova Serrana - MG</span>
          </div>
        </LogoImg>
        <ContainerInfo>
          <div>
            <h1>Farmácia de Manipulação</h1>
          </div>
        </ContainerInfo>
      </HeaderContainer>
    </Container>
  )
}