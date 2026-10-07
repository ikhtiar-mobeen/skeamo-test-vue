# skeamo-test-vue

A deliberately insecure **Vue 3 + Vite** app, for testing Skeamo's launch report.

Do not deploy this. It is broken on purpose.

## Planted faults

1. A live Stripe secret key inside `src/components/Checkout.vue`, shipped to the browser
2. The key is used directly from client code to call a payment API

## Running it

```bash
npm install
npm run dev
```

It binds to `process.env.PORT`, so the workspace preview finds it.
