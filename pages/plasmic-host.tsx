import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";
import "../src/components/CustomCard";

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}
