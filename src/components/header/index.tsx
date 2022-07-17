import { Container, HeaderContainer, LogoImg } from "./styles";
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
          <h1>Entrefarma</h1>
        </LogoImg>
      </HeaderContainer>
    </Container>
  )
}