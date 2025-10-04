import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Head>
    <title>Cryptid Protocol - The Visible Blockchain</title>
  <meta name="description" content="Watch development happen in real-time. Earn crypto for building the future." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrgin="true" />
  <lik href="http://fonts.googlrapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
    rel="stylesheet"  />
    </Head>

  <Header />
    <HeroSection />
    <Features />
    <Footer />
    </>
  )
}

