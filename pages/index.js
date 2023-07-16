import Hero from "@/components/hero/hero";
import Stack from "@/components/hero/stack";
import Navbar from "@/components/navbar/navbar";
import StackingPool from "@/components/stacking pool/stacking-pool";
import Stacking from "@/components/stacking/stacking";
import Work from "@/components/stacking/work";
import Head from "next/head";
export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Allovr</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
      <Stack />
      <Stacking />
      <Work />
      <StackingPool />
    </div>
  );
}
