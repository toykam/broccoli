import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-binance-black p-4 border-b border-binance-yellow">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo */}
        <Link href="/">
          <span className="text-binance-yellow text-2xl font-bold cursor-pointer">
            $BROCCOLI
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center">
          {/* <Link href="/about">
            <span className="text-binance-yellow hover:text-yellow-600 cursor-pointer font-semibold">
              About
            </span>
          </Link> */}
          {/* <Link href="/how-to-buy">
            <span className="text-binance-yellow hover:text-yellow-600 cursor-pointer font-semibold">
              How to Buy
            </span>
          </Link> */}
          {/* <Link href="/community">
            <span className="text-binance-yellow hover:text-yellow-600 cursor-pointer font-semibold">
              Community
            </span>
          </Link> */}
        </div>

        {/* Connect Wallet Button */}
        {/* <button className="bg-binance-yellow text-binance-black px-4 py-2 rounded-full font-bold hover:bg-yellow-600 transition-colors">
          Connect Wallet
        </button> */}
      </div>
    </nav>
  );
}