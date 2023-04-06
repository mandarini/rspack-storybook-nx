# RspackStorybookNx

## Install dependencies

```bash
yarn
```

## Serve/build Storybook

```bash
npx nx build-storybook my-app
```

and

```bash
npx nx storybook my-app
```

Error summary:

```
ERR! Failed to resolve @rspack-storybook-nx/my-lib-1 in /Users/katerina/Projects/nrwl/test_nx_workspaces/rspack-storybook-nx/apps/my-app/src/app/app.tsx
```

It cannot resolve the path to this lib: `@rspack-storybook-nx/my-lib-1`

Full error:

```
npx nx build-storybook my-app

> nx run my-app:build-storybook


>  NX  Storybook builder starting ...

info => Cleaning outputDir: /dist/storybook/my-app
info => Loading presets
info => Building manager..
info => Manager built (151 ms)
info => Compiling preview..
info => Copying static files: /Users/katerina/Projects/nrwl/test_nx_workspaces/rspack-storybook-nx/node_modules/@storybook/manager/static at /Users/katerina/Projects/nrwl/test_nx_workspaces/rspack-storybook-nx/dist/storybook/my-app/sb-common-assets
info => Using default Rspack setup
ERR! => Failed to build the preview
ERR! Failed to resolve @rspack-storybook-nx/my-lib-1 in /Users/katerina/Projects/nrwl/test_nx_workspaces/rspack-storybook-nx/apps/my-app/src/app/app.tsx

 >  NX   => Rspack failed, learn more with --debug-rspack

   Pass --verbose to see the stacktrace.


 ————————————————————————————————————————————————————————————————————————————————————————————————————

 >  NX   Ran target build-storybook for project my-app (7s)

    ✖    1/1 failed
    ✔    0/1 succeeded [0 read from cache]

   View structured, searchable error logs at https://nx.app/runs/KPGX7G2AR6

```
