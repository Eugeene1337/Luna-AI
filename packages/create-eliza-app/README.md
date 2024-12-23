# create-luna-app

A minimal CLI tool to scaffold luna applications with zero configuration. Get started building your own luna-style chatbot in seconds.

<!-- automd:badges color="yellow" license name="create-luna-app" codecov bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/create-luna-app?color=yellow)](https://npmjs.com/package/create-luna-app)
[![npm downloads](https://img.shields.io/npm/dm/create-luna-app?color=yellow)](https://npm.chart.dev/create-luna-app)
[![bundle size](https://img.shields.io/bundlephobia/minzip/create-luna-app?color=yellow)](https://bundlephobia.com/package/create-luna-app)

<!-- /automd -->

## Usage

You can create a new luna app with your preferred package manager:

<!-- automd:pm-x version="latest" name="create-luna-app" args="path" <flags>" -->

```sh
# npm
npx create-luna-app@latest path

# pnpm
pnpm dlx create-luna-app@latest path

# bun
bunx create-luna-app@latest path

# deno
deno run -A npm:create-luna-app@latest path
```

<!-- /automd -->

## Command Line Arguments

-   `--name`: Name of the template to use (default: "luna")
-   `--dir`: Directory where the project will be created (default: current directory)
-   `--registry`: Custom registry URL for templates

## Getting Started

Once your project is created:

1. Navigate to the project directory:

    ```bash
    cd your-project-name
    ```

2. Copy the example environment file:

    ```bash
    cp .env.example .env
    ```

3. Install dependencies:

    ```bash
    pnpm install
    ```

4. Start the development server:
    ```bash
    pnpm start
    ```

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
