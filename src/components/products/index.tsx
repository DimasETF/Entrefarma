import Image from "next/image";
import { BiInfoCircle } from "react-icons/bi"
import { Categories, Product } from "./styles";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Link,
  HStack,
  Text,
} from '@chakra-ui/react'
import { BsTelephone, BsWhatsapp } from "react-icons/bs";

export function ProductItem({ title, price, img, alt, description, category }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Product>
      <Modal isOpen={isOpen} onClose={onClose}  scrollBehavior={"inside"}>
        <ModalOverlay />
        <ModalContent p={2}>
          <ModalHeader textTransform={"uppercase"} color="#063B6D">{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="3" color="#788199" fontSize="0.875rem" fontWeight="bold">DESCRIÇÃO</Text>
            <div
              dangerouslySetInnerHTML={{
                __html: description
              }}
            />
          </ModalBody>

          <ModalFooter p={8} display="flex" justifyContent={"space-between"}>
          <Text fontSize="2rem" fontWeight={"bold"} color="#68B42F">R$ {price}</Text>
            <HStack spacing={3}>
              <Link href='https://web.whatsapp.com/send?phone=5537999718369' isExternal color={"#68B42F"} fontSize={"1.5rem"}>
                <BsWhatsapp />
              </Link>
              <Link href='tel:+553732281000' color={"#063B6D"} fontSize={"1.5rem"}>
                <BsTelephone />
              </Link>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <img src={img} alt={alt} />
      
        
        <Text color="#063B6D" fontSize="1.1rem" minHeight="2rem" fontWeight="bold" mb={4}>{title}</Text>
        <Text color="#789B99"  minHeight={"45px"} noOfLines={[1, 2]}>{description}</Text>
        <Categories>
          <span>R$ {price}</span>
        </Categories> 
        
        <Button
          onClick={onOpen}
          mt="2"
          color="#fff"
          bg="#063B6D"
          fontSize="1rem"
          w="100%"
          _hover={{
            bgColor: '#68B42F'
          }}
        >
          <BiInfoCircle />
          <Text ml="2">Saber mais</Text>
        </Button>
      
    </Product>
  )
}

