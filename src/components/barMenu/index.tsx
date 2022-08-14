import { ContactItens, ContainerMenu, ContentBarMenu } from "./styles";
import { AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai"
import { DrawerCategory } from "../drawer";

export function BarMenu() {
  return (
    <ContainerMenu>
      <ContentBarMenu>
        <span>
          <DrawerCategory />
        </span>
        <ContactItens>
          <a href="https://api.whatsapp.com/send?phone=5537999718369" target={"_blank"} rel="noreferrer"><AiOutlineWhatsApp /><span>(37)99971-8369</span></a>
          <a href="tel:+553732281000"><AiOutlinePhone /><span>(37)3228-1000</span></a>
        </ContactItens>
      </ContentBarMenu>
    </ContainerMenu>
  )
}