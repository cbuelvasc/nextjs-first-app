# Next.js - First App

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker

### Build Image
```bash
$ docker build -t nextjs-first-app . 
```

### Run Image
```bash
$ docker run -dp 3000:3000 nextjs-first-app 
```