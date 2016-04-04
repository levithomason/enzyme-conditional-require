# enzyme-conditional-require

Conditionally requires React 0.13 deps, regarding https://github.com/airbnb/enzyme/issues/285.

You can see the changes made to `react-compat.js` by looking at the version in the root of this repo.

## Setup

```shell
npm i
npm run rebuild-enzyme
```

This is gonna rebuild the local enzyme with the `react-compat.js` in this repo.

## Try it

Now you can make webpack builds with enzyme without getting errors (albeit you get require expression warnings).

```shell
npm run build
```
