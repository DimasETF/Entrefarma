import type { NextPage } from 'next'
import Head from 'next/head'
import { BarMenu } from '../components/barMenu'
import { CategorySection } from '../components/category'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { createClient } from '../../prismicio'
import {IProductsProps} from "../interfaces/IProducts"
import {CategoriesContextProvider} from "../contexts/CategoriesContext"


export default function Home({products}: IProductsProps ){
  return (
    <CategoriesContextProvider products={products}>
      <Head>
        <title>Entrefarma - Nova Serrana</title>
      </Head>
      <Header />
      <BarMenu />
      <CategorySection products={products}/>
      <Footer/>
    </CategoriesContextProvider>
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
      category: product.data.category
    }
  })

  return {
    props: { products }, // Will be passed to the page component as props
  }
}