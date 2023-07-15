
import Hero from "@/components/hero/hero"
import Stack from "@/components/hero/stack"
import Navbar from "@/components/navbar/navbar"
import StackingPool from "@/components/stacking pool/stacking-pool"
import Stacking from "@/components/stacking/stacking"
import Work from "@/components/stacking/work"
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stack />
      <Stacking />
      <Work />
      <StackingPool />
    </div>
  )
}
