import { Plugin } from "@luna/core";
import { transfer } from "./actions/transfer";
import { bridgeTransfer } from "./actions/bridgeTransfer";
import { confiPump } from "./actions/confiPump";

export const confluxPlugin: Plugin = {
    name: "conflux",
    description: "Conflux Plugin for luna",
    actions: [transfer, bridgeTransfer, confiPump],
    providers: [],
};
