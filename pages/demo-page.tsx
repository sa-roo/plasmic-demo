// pages/demo-page.tsx
import {
  PlasmicComponent,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";
import Layout from "@/src/components/Layout";

export default function DemoPage() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <Layout>
        <PlasmicComponent component="demo-page" />
      </Layout>
    </PlasmicRootProvider>
  );
}
