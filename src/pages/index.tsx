import type { NextPage } from 'next'
import Head from 'next/head'
import { BarMenu } from '../components/barMenu'
import { CategorySection } from '../components/category'
import { Footer } from '../components/footer'
import { Header } from '../components/header'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Entrefarma - Nova Serrana</title>
      </Head>
      <Header />
      <BarMenu />
      <CategorySection />
      <Footer/>
    </>
  )
}

export default Home
