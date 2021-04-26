# Leiturinha - Frontend challenge
The challenge was to create an application to manage restaurant orders in a simple way. To see more about the challenge, click [here](https://github.com/joaodorea/leiturinha/blob/main/README_TEST.md).

## The file is structured as follows:

```text
.
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── mocks/
│   │   │   └── products.json
│   │   └── styles/
│   │       ├── billing.scss
│   │       ├── geral.scss
│   │       ├── index.scss
│   │       └── orders.scss
│   ├── models/
│   │   ├── Billing.ts
│   │   ├── Order.ts
│   │   ├── Products.ts
│   │   └── ProductsOrder.ts
│   ├── modules/
│   │   ├── billing/
│   │   │   ├── components/
│   │   │   │   ├── PaymentForm.tsx
│   │   │   │   └── PaymentOrder.tsx
│   │   │   └── views/
│   │   │       └── index.tsx
│   │   └── orders/
│   │       ├── components/
│   │       │   ├── itemSingle.tsx
│   │       │   ├── itemsMenu.tsx
│   │       │   └── orderSummary.tsx
│   │       └── views/
│   │           └── index.tsx
│   ├── state/
│   │   └── context.tsx
│   └── utils/
│       ├── index.ts
│       └── money.ts
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── package.json
├── README.md
├── tsconfig.json
└── webpack.config.ts
```

Before running the app, you need to have installed these tools on your computer: [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/).

```bash
# To clone this repository on your computer run:
$ git clone https://github.com/joaodorea/leiturinha.git

# To install the dependencies in your project's directory run:
$ npm install

# To execute the app on development  mode run:
$ npm run start

# The app will be open on port:8080 - access http://localhost:8080
```

## Build with
- Javascript
- React.js
- Typescript
- SCSS
- EsLint
- Webpack

## Author 
Developed by [João Paulo](https://github.com/joaodorea), find me on [LinkedIn](https://www.linkedin.com/in/joaodorea/) 👋

Boilerplate used
https://github.com/GR34SE/react-typescript-starter.git