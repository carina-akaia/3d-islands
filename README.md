# Full Stack DDD

🚧 Work in progress

Demo project showcasing an architectural framework for fullstack web projects,
that adopts modern standards and popular patterns / approaches in order to achieve
better scalability and streamlined onboarding.

## Architecture

### Islands

Hardened Islands Architecture implementation where islands declared as WebComponents
to facilitate isolation and potential interoperability across frameworks.

## Development environment

### Prerequisites

Install `mise` version manager or make sure that it's already installed:

<https://mise.jdx.dev/getting-started.html>

### Installing required tools and dependencies

```sh
mise trust && mise i && npm run setup
```

### Running development server

```sh
just dev
```

## CI/CD

### Building production bundle

```sh
just build
```

### Running production server

```sh
just start
```
