import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import {IProductsProps} from "../interfaces/IProducts"

type AuthContextType = {
  children: ReactNode
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


type CategoriesProps = {
  categoriesButtons: string[]
  productsCategories: IProductsProps
  category: string
  setCategory: Dispatch<SetStateAction< undefined>>;
}

export const CategoriesContext = createContext({} as CategoriesProps)

export function CategoriesContextProvider({children, products}: AuthContextType){

  const [category, setCategory] = useState("all")
  const [productsCategories, setProductsCategories] = useState<IProductsProps>()
  const [categoriesButtons, setCategoriesButtons] = useState<String[]>()

  function verifyCategories() {
    const categories = [] as string[]
    products.map(product => {
      if (!categories.includes(product.category)) {
        categories.push(product.category)
      }
    })
    setCategoriesButtons(categories)
  }

  useEffect(() => {
    verifyCategories()
    const productList = [] as Product[]
    products.map(product => {
      if (category == "all") {
        productList.push(product)
      } else if (category != "all" && product.category == category) {
        productList.push(product)
      }
    })
    setProductsCategories(productList)
  }, [category, products])
  
  return(
    <CategoriesContext.Provider value={{
      categoriesButtons,
      productsCategories,
      category,
      setCategory
    }
    }>
      {children}
    </CategoriesContext.Provider>
  )
}


