# Palworld Modding Documetation

## Contributors
- [LocalCC](https://github.com/LocalCC)
- [ItzDabbzz](https://github.com/ItzDabbzz)
- [Dyster](https://github.com/Dytser)
- [Latenos](https://github.com/Latenos)
- [Okaetsu](https://github.com/Okaetsu)
- [Tctcl](https://github.com/Tctcl)

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

Depending on your package manager, either run and add `yarn`, `pnpm` or `npm` to run the appropriate package install command(s).

```properties
$ yarn
```

```properties
$ pnpm i
```

```properties
$ npm i
```

### Local Development

```shell
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```properties
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```properties
$ USE_SSH=true yarn deploy
```

Not using SSH:

```properties
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
