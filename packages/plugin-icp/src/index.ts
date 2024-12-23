import { Plugin } from "@luna/core";
import { icpWalletProvider } from "./providers/wallet";
import { executeCreateToken } from "./actions/createToken";

export const icpPlugin: Plugin = {
    name: "icp",
    description: "Internet Computer Protocol Plugin for luna",
    providers: [icpWalletProvider],
    actions: [executeCreateToken],
    evaluators: [],
};

export default icpPlugin;
