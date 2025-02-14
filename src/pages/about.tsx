import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TokenomicsCard from '@/components/TokenomicCard';
import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About $BROCCOLI</title>
      </Head>

      <Navbar />

      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">About $BROCCOLI</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Story of Broccoli</h2>
          <p className="text-lg">
            {"Broccoli is CZ's beloved Belgian Malinois, who became a symbol of resilience and energy in the crypto world. Inspired by his story, we created $BROCCOLI, a meme token that celebrates community, fun, and the spirit of crypto."}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TokenomicsCard
              title="Community Rewards"
              description="50% of the total supply is allocated to community rewards."
              percentage="50%"
            />
            <TokenomicsCard
              title="Liquidity"
              description="30% of the total supply is reserved for liquidity."
              percentage="30%"
            />
            <TokenomicsCard
              title="Development"
              description="20% of the total supply is used for development and marketing."
              percentage="20%"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}