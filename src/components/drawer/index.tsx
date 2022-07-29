import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useDisclosure, VStack } from "@chakra-ui/react"
import React, { useContext } from "react"
import { BiCategoryAlt } from "react-icons/bi"
import { CategoriesContext } from "../../contexts/CategoriesContext"
import { IProductsProps } from "../../interfaces/IProducts"
import { DrawerContainerItens } from "./sytles"


export function DrawerCategory() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { categoriesButtons, setCategory } = useContext(CategoriesContext)
  function ClickButton(item){
    setCategory(item)
    
  }
  return (
    <>
      <DrawerContainerItens>
        <button
          ref={btnRef}
          onClick={onOpen}
          fontSize="1.5rem"
          _hover={{ bgColor: "transparent", color: "#063B6D" }}
        >
          <BiCategoryAlt />
          CATEGORIAS
        </button>
      </DrawerContainerItens>
      <Drawer
        isOpen={isOpen}
        placement='left'
        size="sm"
        onClose={onClose}
        finalFocusRef={btnRef}
        
      >
        <DrawerOverlay />
        <DrawerContent
          bgColor="#D9D9D9"
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <span>SELECIONE UMA CATEGORIA</span>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing={4}>
              <Button
                onClick={() => {
                  setCategory("all")
                }}
                bgColor={"transparent"}
                _hover={{ bgColor: '#68B42F', color: "#fff" }}
              >
                Todos os Itens
              </Button>
              {categoriesButtons?.map(item => {
                return (
                  <Button
                    key={item}
                    onClick={() => ClickButton(item)}
                    
                    bgColor={"transparent"}
                    _hover={{ bgColor: '#68B42F', color: "#fff" }}
                  >
                    {item}
                  </Button>
                )
              })}
            </Stack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}