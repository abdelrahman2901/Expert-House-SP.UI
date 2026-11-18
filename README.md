# Expert House SP

One-page company site for Expert House SP. It recreates the public portfolio: about, services, partner solutions, case studies, and the contact form.

## Run

```bash
npm install
npm start
```

The site is served at `http://localhost:4200`.

## Contact API

The form posts to the address in `src/environments/environment.ts`:

```ts
apiUrl: 'http://localhost:5028'
```

That value is the local contact API. Change it when the API is hosted somewhere else. The API project is separate and has its own setup notes.
