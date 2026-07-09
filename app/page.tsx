import { Hero } from "@/components/hero";
import { FeatureLedger } from "@/components/feature-ledger";
import { VisionShowcase } from "@/components/vision-showcase";
import { CtaBand } from "@/components/cta-band";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureLedger />
      <VisionShowcase />
      <CtaBand />
    </div>
  );
}
