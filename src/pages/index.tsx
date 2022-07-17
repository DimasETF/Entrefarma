import type { NextPage } from 'next'
import { BarMenu } from '../components/barMenu'
import { CategorySection } from '../components/category'
import { Header } from '../components/header'


const Home: NextPage = () => {
  return (
    <>
      <Header />
      <BarMenu />
      <CategorySection />
    </>
  )
}

export default Home
