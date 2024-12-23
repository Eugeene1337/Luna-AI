import { Plugin } from "@luna/core";

import transfer from "./actions/transfer";

export const zksyncEraPlugin: Plugin = {
    name: "zksync-era",
    description: "ZKsync Era Plugin for luna",
    actions: [transfer],
    evaluators: [],
    providers: [],
};

export default zksyncEraPlugin;
