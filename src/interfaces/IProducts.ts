export interface IProductsProps {
  map(arg0: (product: any) => JSX.Element): import("react").ReactNode
  products: Product[]
}

interface Product {
  id: string,
  title: string
  img: {
    url: string,
    alt: string
  },
  content: string,
  price: string
  category: string
}
