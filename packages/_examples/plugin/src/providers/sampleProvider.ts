import {
    Provider,
    IAgentRuntime,
    Memory,
    State,
    lunaLogger,
} from "@luna/core";

export const sampleProvider: Provider = {
    get: async (runtime: IAgentRuntime, message: Memory, state: State) => {
        // Data retrieval logic for the provider
        lunaLogger.log("Retrieving data in sampleProvider...");
    },
};
