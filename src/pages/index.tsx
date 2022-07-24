import type { NextPage } from 'next'
import Head from 'next/head'
import { BarMenu } from '../components/barMenu'
import { CategorySection } from '../components/category'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { createClient } from '../../prismicio'

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

export default function Home({products}: ProductsProps ){
  return (
    <>
      <Head>
        <title>Entrefarma - Nova Serrana</title>
      </Head>
      <Header />
      <BarMenu />
      <CategorySection products={products}/>
      <Footer/>
    </>
  )
}

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData })

  const productsResponse = await client.getAllByType('units')
  const products = productsResponse.map(product =>{
    return {
      id: product.uid,
      title: product.data.title,
      img: {
        url: product.data.img.url,
        alt: product.data.img.alt
      },
      content: product.data.content,
      price: product.data.price,
    }
  })

  return {
    props: { products }, // Will be passed to the page component as props
  }
}