import { Plugin } from "@luna/core";
import transferToken from "./actions/transfer.ts";
import { WalletProvider, walletProvider } from "./providers/wallet.ts";

export { WalletProvider, transferToken as TransferAptosToken };

export const aptosPlugin: Plugin = {
    name: "aptos",
    description: "Aptos Plugin for luna",
    actions: [transferToken],
    evaluators: [],
    providers: [walletProvider],
};

export default aptosPlugin;
