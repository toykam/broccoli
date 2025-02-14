import React, { useState } from 'react'

export default function ContractAddress() {
    const [isCopied, setIsCopied] = useState(false);

  const contractAddress = '0xe88114321E02341Fb84971749ccbd23984593FbB'; // Replace with your actual contract address

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <section className="bg-binance-yellow text-binance-black py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Contract Address</h2>
          <div className="flex justify-center items-center">
            <p className="bg-binance-black text-binance-yellow p-2 rounded-lg font-mono">
              {contractAddress}
            </p>
            <button
              onClick={copyToClipboard}
              className="ml-4 bg-binance-black text-binance-yellow px-4 py-2 rounded-full font-bold hover:bg-gray-800 transition-colors"
            >
              {isCopied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </section>
  )
}
