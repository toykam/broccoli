import Image from 'next/image'
import React from 'react'
import { FaTelegram, FaTwitter } from 'react-icons/fa'

export default function Community() {
  return (
  <section className="bg-binance-black text-white py-12">
    <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-8">Join the Community</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Meme Gallery */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">Meme Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['/images/image1.jpeg', '/images/image2.jpeg', '/images/image3.jpeg'].map((meme, index) => (
              <Image
                height={200} width={200}
                key={index}
                src={meme}
                alt={`Meme ${index + 1}`}
                className="rounded-lg shadow-lg w-full"
              />
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex flex-col space-y-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-binance-yellow text-binance-black px-4 py-2 rounded-full font-bold hover:bg-yellow-600 transition-colors"
            >
              <FaTwitter className="w-6 h-6" />
              <span>Twitter</span>
            </a>
            <a
              href="https://telegram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-binance-yellow text-binance-black px-4 py-2 rounded-full font-bold hover:bg-yellow-600 transition-colors"
            >
              <FaTelegram className="w-6 h-6" />
              <span>Telegram</span>
            </a>
            {/* <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-binance-yellow text-binance-black px-4 py-2 rounded-full font-bold hover:bg-yellow-600 transition-colors"
            >
              <img src="/images/discord-icon.png" alt="Discord" className="w-6 h-6" />
              <span>Discord</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
