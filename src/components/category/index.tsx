import { Text, useToast } from "@chakra-ui/react";
import { ProductItem } from "../products";
import { IoAlertCircleOutline } from "react-icons/io5"
import { Alert, Category, CategoryContainer, HeaderCategory } from "./styles";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";

export function CategorySection() {
  const {category, productsCategories, setCategory} = useContext(CategoriesContext)
  const toast = useToast()
  function exitClickButton(){
    toast({
      title: `visualizando a categoria - Todos os itens`,
      variant: "solid",
      isClosable: true,
    })
    setCategory("all")
  }
  return (
    <Category>
      <HeaderCategory>
        {category == "all" ? (
          <Alert>
          <Text ><span>Todos os Produtos</span></Text>
        </Alert>
        ) : (
          <Alert>
            <IoAlertCircleOutline />
              Você está visualizando a categoria - 
              <span>{category}</span>
              -
              <button
                onClick={()=>exitClickButton()}
              >
                 sair
              </button>
            
          </Alert>
        )}
      </HeaderCategory>
      <CategoryContainer>

        {productsCategories?.map(product => {
          return (
            <ProductItem
              key={product.id}
              title={product.title}
              price={product.price}
              img={product.img.url}
              alt={product.img.alt}
              description={product.content}
              category={product.category}
            />
          )
        })}
      </CategoryContainer>
    </Category>
  )
}