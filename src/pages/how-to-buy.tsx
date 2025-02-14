import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HowToBuy() {
  return (
    <div>
      <Head>
        <title>How to Buy $BROCCOLI</title>
      </Head>

      <Navbar />

      <main className="p-8 bg-green-50">
        <h1 className="text-3xl font-bold mb-6">How to Buy $BROCCOLI</h1>
        <ol className="list-decimal pl-6 space-y-4">
          <li>Download and set up a crypto wallet (e.g., MetaMask).</li>
          <li>Add Binance Smart Chain (BSC) to your wallet.</li>
          <li>Buy BNB (Binance Coin) from an exchange.</li>
          <li>Connect your wallet to PancakeSwap.</li>
          <li>Swap BNB for $BROCCOLI using the contract address.</li>
        </ol>
      </main>

      <Footer />
    </div>
  );
}