import { ContainerMenu } from "./styles";
import { BsWhatsapp, BsTelephone } from "react-icons/bs"

export function BarMenu() {
  return (
    <ContainerMenu>
        <div>
          <a href="https://web.whatsapp.com/send?phone=5537999718369" target={"_blank"} rel="noreferrer"><span><BsWhatsapp />(37)99971-8369</span></a>
          <a href="tel:+553732281000"><span><BsTelephone />(37)3228-1000</span></a>
        </div>
    </ContainerMenu>
  )
}