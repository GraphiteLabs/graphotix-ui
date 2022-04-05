import type { NextPage } from 'next'
import { DatabaseCard } from '../components/databaseCard'

const Home: NextPage = () => {
  return (<div className='w-screen h-screen bg-[#434C59] flex'>
    <div className="p-8"><DatabaseCard /></div></div>
  )
}

export default Home
