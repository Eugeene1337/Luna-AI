import { Client, lunaLogger, IAgentRuntime } from "@luna/core";
import { ClientBase } from "./base.ts";
import { validateTwitterConfig } from "./environment.ts";
import { TwitterInteractionClient } from "./interactions.ts";
import { TwitterPostClient } from "./post.ts";
import { TwitterSearchClient } from "./search.ts";

class TwitterManager {
    client: ClientBase;
    post: TwitterPostClient;
    search: TwitterSearchClient;
    interaction: TwitterInteractionClient;
    constructor(runtime: IAgentRuntime, enableSearch: boolean) {
        this.client = new ClientBase(runtime);
        this.post = new TwitterPostClient(this.client, runtime);

        if (enableSearch) {
            // this searches topics from character file
            lunaLogger.warn("Twitter/X client running in a mode that:");
            lunaLogger.warn("1. violates consent of random users");
            lunaLogger.warn("2. burns your rate limit");
            lunaLogger.warn("3. can get your account banned");
            lunaLogger.warn("use at your own risk");
            this.search = new TwitterSearchClient(this.client, runtime);
        }

        this.interaction = new TwitterInteractionClient(this.client, runtime);
    }
}

export const TwitterClientInterface: Client = {
    async start(runtime: IAgentRuntime) {
        await validateTwitterConfig(runtime);

        lunaLogger.log("Twitter client started");

        const manager = new TwitterManager(runtime, this.enableSearch);

        await manager.client.init();

        await manager.post.start();

        await manager.interaction.start();

        await manager.search?.start();

        return manager;
    },
    async stop(_runtime: IAgentRuntime) {
        lunaLogger.warn("Twitter client does not support stopping yet");
    },
};

export default TwitterClientInterface;
