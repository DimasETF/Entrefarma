import Image, { StaticImageData } from "next/image";
import imgBox from "../../../public/frasco.png"
import { Product } from "./styles";
export type ProductProps = {
  title: string,
  price: string
  img: StaticImageData
}

export function ProductItem({ title, price, img }: ProductProps) {
  return (
    <Product>
      <Image
        src={img}
        alt="Box"
        width={140}
        height={180}
      />
      <div>
        <span>{title}</span>
        <strong>{price}</strong>
        <span>O Shampoo SENKEDA Unissex combina com todos os tipos de cabelos e ajuda a realçar a beleza de cada fio, além ...</span>
      </div>
    </Product>
  )
}