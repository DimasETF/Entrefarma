import { ProductItem } from "../products";

import { Category, CategoryContainer } from "./styles";

interface ProductsProps{
  products: Product[]
}

interface Product{
  id: string,
  title: string
  img: {
    url: string,
    alt: string
  },
  content: string,
  price: string
}


export function CategorySection({ products }: ProductsProps) {

  return (
    <Category>
      <CategoryContainer>
        {products.map(product => {
          return (
            <ProductItem
              title={product.title}
              price={product.price}
              img={product.img.url}
              description={product.content}
            />
          )
        })}



      </CategoryContainer>
    </Category>
  )
}