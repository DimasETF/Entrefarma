import { ContactItens, ContainerMenu, ContentBarMenu } from "./styles";
import { BsWhatsapp, BsTelephone } from "react-icons/bs"
import { DrawerCategory } from "../drawer";

export function BarMenu() {
  return (
    <ContainerMenu>
      <ContentBarMenu>
        <span>
          <DrawerCategory />
        </span>
        <ContactItens>
          <a href="https://web.whatsapp.com/send?phone=5537999718369" target={"_blank"} rel="noreferrer"><BsWhatsapp /><span>(37)99971-8369</span></a>
          <a href="tel:+553732281000"><BsTelephone /><span>(37)3228-1000</span></a>
        </ContactItens>
      </ContentBarMenu>
    </ContainerMenu>
  )
}