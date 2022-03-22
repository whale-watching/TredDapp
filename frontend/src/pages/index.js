import Head from 'next/head'
import dynamic from 'next/dynamic'

// TODO: Remove dynamic import when web3-react supports ssr.
const Banner = dynamic(
  () => {
    return import('../components/Banner').then((module) => {
      return module.Banner
    })
  },
  { ssr: false },
)

const Home = () => {
  return (
    <>
      <Head>
        <title>Auction</title>
        <meta name="description" content="Decentralized Auction by DAPP-Z" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
    </>
  )
}

export default Home
