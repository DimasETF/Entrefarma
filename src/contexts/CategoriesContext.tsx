import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

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
  categoriesButtons: string[] | undefined
  productsCategories: Product[] | undefined
  category: string | undefined
  setCategory: Dispatch<SetStateAction<string>>;
}

export const CategoriesContext = createContext({} as CategoriesProps)

export function CategoriesContextProvider({children, products}: AuthContextType){

  const [category, setCategory] = useState<string>("all")
  const [productsCategories, setProductsCategories] = useState<Product[]>()
  const [categoriesButtons, setCategoriesButtons] = useState<string[]>()

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
    const productList = [] as Product[] | undefined
    products.map(product => {
      if (category == "all") {
        productList?.push(product)
      } else if (category != "all" && product.category == category) {
        productList?.push(product)
      }
    })
    setProductsCategories(productList)
  // eslint-disable-next-line react-hooks/exhaustive-deps
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


