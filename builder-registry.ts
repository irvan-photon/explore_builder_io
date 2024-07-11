import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  },
  
);

Builder.registerComponent(
  dynamic(() => import('./components/heading')),
  {
    name: 'Heading',
    inputs: [{ name: 'title', type: 'text' }],
    image: 'https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a'
  }
)

Builder.registerComponent(
  dynamic(() => import("./pages/_app")),
  {
    name: "App",
    inputs: [
      {
        name: "__N_SSG",
        type: "boolean",
      },
      {
        name: "__N_SSP",
        type: "boolean",
      },
      {
        name: "Component",
        type: "string",
        meta: {
          ts: "NextComponentType<NextPageContext, any, any>",
        },
        required: true,
      },
      {
        name: "pageProps",
        type: "string",
        meta: {
          ts: "PageProps",
        },
        required: true,
      },
      {
        name: "router",
        type: "string",
        meta: {
          ts: "Router",
        },
        required: true,
      },
    ],
  }
);
