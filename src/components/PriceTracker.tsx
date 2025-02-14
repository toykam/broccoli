import { useEffect, useState } from 'react';

export default function PriceTicker() {
  const [price, setPrice] = useState('0.0000');

  useEffect(() => {
    // Mock API call to fetch price
    const fetchPrice = async () => {
      setTimeout(() => {
        setPrice('0.1234'); // Replace with actual API call
      }, 1000);
    };
    fetchPrice();
  }, []);

  return (
    <div className="bg-binance-yellow text-binance-black p-4 text-center">
      <p className="text-xl font-bold">$BROCCOLI Price: ${price}</p>
    </div>
  );
}