import Link from "next/link";
import {HiOutlineLocationMarker } from "react-icons/hi"
import {AiOutlineInstagram} from "react-icons/ai"
import { ContainerFooter, CopyContent, FooterContent } from "./styles";

export function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <>
      <ContainerFooter>
        <FooterContent>
          <h1><span>Entrefarma</span> - Nova Serrana</h1>
          <Link href={"https://www.google.com/maps/place/Farm%C3%A1cia+Entrefarma/@-19.8772392,-44.9872373,17z/data=!3m1!4b1!4m5!3m4!1s0xa7560df5ccb1f9:0x83b167e0e3816118!8m2!3d-19.8772443!4d-44.9850486"}>
            <a target="_blank"><HiOutlineLocationMarker /> R. Dimas Guimarães, 83 - Centro, Nova Serrana - MG</a>
          </Link>

          <Link href="https://www.instagram.com/entrefarmasaoluiz/" >
            <a target="_blank"><AiOutlineInstagram />entrefarmasaoluiz</a>
          </Link>
        </FooterContent>

      </ContainerFooter>
      <CopyContent>
        Copyright {year} - <span>Entrefarma</span> 
      </CopyContent>
    </>
  )
}