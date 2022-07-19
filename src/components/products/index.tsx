import Image, { StaticImageData } from "next/image";
import { BiInfoCircle } from "react-icons/bi"
import { Product } from "./styles";
export type ProductProps = {
  title: string,
  price: string
  img: StaticImageData
}
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

export function ProductItem({ title, price, img }: ProductProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Product>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <span>O Shampoo SENKEDA Unissex combina com todos os tipos de cabelos e ajuda a realçar a beleza de cada fio, além ...</span>
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
      <Image
        src={img}
        alt="Box"
        width={140}
        height={180}
      />
      <div>
        <span>{title}</span>
        <strong>{price}</strong>
        <Text color="#789B99" noOfLines={[1, 2, 3]}>O Shampoo SENKEDA Unissex combina com todos os tipos de cabelos e ajuda a realçar a beleza de cada fio, além ...</Text>
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