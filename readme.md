# next-seo-test

this is a test for server-side rendering React on the Sisu website

## Dependencies
- Next.JS: server-side rendering and routing
- React: view rendering, components
- Redux: state managing inside the application
- Glamor: css-in-js library

## Run

First you need to install local Dependencies
```
npm i
```
Get the server running and watching for your changes
```
npm run dev
```

Now you can see the application on [http://localhost:3000](http://localhost:3000)

## Troubleshoot

- For some reason, `next` may not be found on `server.js` if you install everything from `package.json`.
A quick workaround for now is running `npm i --save next@beta`
