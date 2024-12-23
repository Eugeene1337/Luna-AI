import { Plugin } from "@luna/core";
import { zgUpload } from "./actions/upload";

export const zgPlugin: Plugin = {
    description: "ZeroG Plugin for luna",
    name: "ZeroG",
    actions: [zgUpload],
    evaluators: [],
    providers: [],
};
