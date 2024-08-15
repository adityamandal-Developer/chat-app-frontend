import type { CodegenConfig } from "@graphql-codegen/cli";
const documentsPattern = "**/*.graphql";
const plugins = [
  "typescript",
  "typescript-operations",
  "named-operations-object",
  "typed-document-node",
];

const config: CodegenConfig = {
  overwrite: true,
  //   watch: true,
  schema: "http://localhost:3000/graphql",
  generates: {
    "./src/network/src/gql/generated.tsx": {
      documents: `./src/${documentsPattern}`,
      plugins,
    },
  },
};

export default config;
