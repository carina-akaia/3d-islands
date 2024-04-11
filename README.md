# 3D Islands

Demo project showcasing a hardened Island Architecture implementation with WebGL rendering.

Islands are declared as WebComponents where ShadowDOM holds `<canvas />` controlled by React Three Fiber.

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
