import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <section className="bg-binance-black text-white py-12 md:py-20">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
    <div className="text-center md:text-left md:w-1/2">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-4"
        >
        Welcome to $BROCCOLI
        </motion.h1>
      <p className="text-lg md:text-xl mb-8">
      {"Broccoli is CZ's beloved Belgian Malinois, who became a symbol of resilience and energy in the crypto world. Inspired by his story, we created $BROCCOLI, a meme token that celebrates community, fun, and the spirit of crypto."}
      </p>
      
      <Link href={"https://app.uniswap.org/swap?chain=bnb&outputCurrency=0xe88114321e02341fb84971749ccbd23984593fbb"}>
        <button className="bg-binance-yellow text-binance-black px-6 py-3 rounded-full font-bold hover:bg-yellow-600 transition-colors">
          Buy $BROCCOLI Now
        </button>
      </Link>
    </div>
    <div className="md:w-1/2 mt-8 md:mt-0">
      <Image
        height={1000} width={1000}
        src="/images/logo-nobg.png"
        alt="Broccoli the Dog"
        className="rounded-lg shadow-lg w-full max-w-md mx-auto"
      />
    </div>
  </div>
</section>
  )
}
