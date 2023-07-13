import Hero from "@/components/hero/hero"
import Stack from "@/components/hero/stack"
import StackingPool from "@/components/stacking pool/stacking-pool"
import Stacking from "@/components/stacking/stacking"
import Work from "@/components/stacking/work"
export default function HomePage() {
  return (
    <section>
      <Hero />
      <Stack />
      <Stacking />
      <Work />
      <StackingPool />
    </section>
  )
}
