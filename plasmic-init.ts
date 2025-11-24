import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Layout from "./src/components/Layout";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "mcwiUf8uhPZmUZ1s8vCaKH",
      token:
        "LGsyQf4CqGHi7SfSvM2u3a2WzqnGNryrXbBkqLeLbPlcAcp3lXLMWZ0oB0dTpfd4MsygxLoaMQtDicZzVFlq4w",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

PLASMIC.registerGlobalContext(Layout, {
  name: "Layout",
  props: {
    children: {
      type: "object",
    },
    hideLayout: {
      type: "boolean",
    },
  },
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
