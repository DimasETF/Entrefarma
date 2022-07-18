import type { NextPage } from 'next'
import Head from 'next/head'
import { BarMenu } from '../components/barMenu'
import { CategorySection } from '../components/category'
import { Header } from '../components/header'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Entrefarma - Farmácia São Luiz</title>
      </Head>
      <Header />
      <BarMenu />
      <CategorySection />
    </>
  )
}

export default Home
