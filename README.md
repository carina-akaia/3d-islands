# Noname Project

NextJS + GraphQL + Rust experiment.

## Development

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
