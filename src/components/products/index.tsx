import Image, { StaticImageData } from "next/image";
import { BiInfoCircle } from "react-icons/bi"
import { Product } from "./styles";

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

export function ProductItem({ title, price, img, description }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Product>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <span><div
              dangerouslySetInnerHTML={{
                __html: description
              }}
            /></span>
            <span>{price}</span>
          </ModalBody>

          <ModalFooter p={8}>
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
      <img src={img} alt="" />

      <div>
        <span>{title}</span>
        <strong>R$ {price}</strong>
        <Text color="#789B99" noOfLines={[1, 2, 3]}>{description}</Text>
        <Button
          onClick={onOpen}
          mt="4"
          color="#fff"
          bg="#063B6D"
          fontSize="1rem"
          _hover={{
            bgColor: '#68B42F'
          }}
        >
          <BiInfoCircle />
          <Text ml="2">Saber mais</Text>
        </Button>
      </div>
    </Product>
  )
}

