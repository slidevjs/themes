# Contributing

Excited to hear that you are interested in contributing to this project! Thanks!

## Setup

This project uses [`pnpm`](https://pnpm.io/) to manage the dependencies, install it if you haven't via

```bash
npm i -g pnpm
```

Clone this repo to your local machine and install the dependencies. 

```bash
pnpm install
```

## Screenshots

```bash
pnpm run screenshot
```

It will generate screenshots for each theme, and output them under `screenshots/{theme-name}`, then compress them. The compress is done by global cli command [`pngquant`](https://pngquant.org/), where you will need to install it beforehand.

When the screenshots for corresponding pages already exist, the rendering will be skipped for them. To re-generate some of them, remove those files and run the command again.

## Release

```bash
pnpm run release
```

It will prompt you to choose the package and version to release. The publishing process it done on CI, there are no npm permissions required.

## Code Style

Don't worry about the code style as long as you install the dev dependencies. Git hooks will format and fix them for you on committing.

## Thanks

Thank you again for being interested in this project! You are awesome!
