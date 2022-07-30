import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, Toast, useDisclosure, useToast, VStack } from "@chakra-ui/react"
import React, { useContext } from "react"
import { BiCategoryAlt } from "react-icons/bi"
import { CategoriesContext } from "../../contexts/CategoriesContext"
import { DrawerContainerItens } from "./sytles"


export function DrawerCategory() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { categoriesButtons, setCategory } = useContext(CategoriesContext)
  const toast = useToast()
  function ClickButton(item: string){
    if(item == "all"){
      toast({
        title: `visualizando a categoria - Todos os itens`,
        variant: "solid",
        isClosable: true,
      })
    }else{
    toast({
      title: `visualizando a categoria - ${item}`,
      variant: "solid",
      isClosable: true,
    })}
    onClose()
    setCategory(item)
  }
  return (
    <>
      <DrawerContainerItens>
        <button
          onClick={onOpen}
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
                onClick={() => ClickButton("all")}
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