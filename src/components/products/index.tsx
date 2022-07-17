import Image, { StaticImageData } from "next/image";
import imgBox from "../../../public/frasco.png"
import { ImageProduct, Product } from "./styles";
export type ProductProps = {
  title: string,
  price: string
  img: StaticImageData
}

export function ProductItem({ title, price, img }: ProductProps) {
  return (
    <Product>
      <ImageProduct>

        <Image
          src={img}
          alt="Box"
          width={140}
          height={180}
        />
      </ImageProduct>
      <span>{title}</span>
      <h2>{price}</h2>
    </Product>
  )
}