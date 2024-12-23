import { Plugin } from "@luna/core";
import transfer from "./actions/transfer";
import createToken from "./actions/createToken";

export const multiversxPlugin: Plugin = {
    name: "multiversx",
    description: "MultiversX Plugin for luna",
    actions: [transfer, createToken],
    evaluators: [],
    providers: [],
};

export default multiversxPlugin;
