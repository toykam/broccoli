import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Hero from '@/components/Hero';
import ContractAddress from '@/components/ContractAddress';
import Community from '@/components/Community';
import PriceTicker from '@/components/PriceTracker';

export default function Home() {
  return (
    <div>
      <Head>
        <title>$BROCCOLI Token - The Meme Token Inspired by CZ's Dog</title>
        <meta name="description" content="Join the $BROCCOLI revolution! A meme token inspired by CZ's dog, Broccoli. Buy now and be part of the fun!" />
      </Head>

      <Navbar />

      <Hero />

      <ContractAddress />

      {/* <PriceTicker /> */}


      <Community />

      {/* Other Sections */}
      {/* <main className="bg-binance-black text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why $BROCCOLI?</h2>
          <p className="text-lg mb-8">Join the fun and be part of the meme revolution!</p>
        </div>
      </main> */}

      <Footer />
    </div>
  );
}