import { IAgentRuntime, lunaLogger } from "@luna/core";

export async function validateEchoChamberConfig(
    runtime: IAgentRuntime
): Promise<void> {
    const apiUrl = runtime.getSetting("ECHOCHAMBERS_API_URL");
    const apiKey = runtime.getSetting("ECHOCHAMBERS_API_KEY");

    if (!apiUrl) {
        lunaLogger.error(
            "ECHOCHAMBERS_API_URL is required. Please set it in your environment variables."
        );
        throw new Error("ECHOCHAMBERS_API_URL is required");
    }

    if (!apiKey) {
        lunaLogger.error(
            "ECHOCHAMBERS_API_KEY is required. Please set it in your environment variables."
        );
        throw new Error("ECHOCHAMBERS_API_KEY is required");
    }

    // Validate API URL format
    try {
        new URL(apiUrl);
    } catch (error) {
        lunaLogger.error(
            `Invalid ECHOCHAMBERS_API_URL format: ${apiUrl}. Please provide a valid URL.`
        );
        throw new Error("Invalid ECHOCHAMBERS_API_URL format");
    }

    // Optional settings with defaults
    const username =
        runtime.getSetting("ECHOCHAMBERS_USERNAME") ||
        `agent-${runtime.agentId}`;
    const defaultRoom =
        runtime.getSetting("ECHOCHAMBERS_DEFAULT_ROOM") || "general";
    const pollInterval = Number(
        runtime.getSetting("ECHOCHAMBERS_POLL_INTERVAL") || 120
    );

    if (isNaN(pollInterval) || pollInterval < 1) {
        lunaLogger.error(
            "ECHOCHAMBERS_POLL_INTERVAL must be a positive number in seconds"
        );
        throw new Error("Invalid ECHOCHAMBERS_POLL_INTERVAL");
    }

    lunaLogger.log("EchoChambers configuration validated successfully");
    lunaLogger.log(`API URL: ${apiUrl}`);
    lunaLogger.log(`Username: ${username}`);
    lunaLogger.log(`Default Room: ${defaultRoom}`);
    lunaLogger.log(`Poll Interval: ${pollInterval}s`);
}
