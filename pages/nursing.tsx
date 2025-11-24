// pages/demo-page.tsx
import {
  PlasmicComponent,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";

export default function NursingPage() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component="nursing" />
    </PlasmicRootProvider>
  );
}
