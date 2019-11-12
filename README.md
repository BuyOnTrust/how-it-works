# How-It-Works => BuyOnTrust

## Requirements

In order to test and deploy this static React app, you will need to have:

- Node.js (version >= 6.10) and NPM installed in your machine.(Try to keep up-to-date on versioning dependancies)

## Configuration

Before being able to test locally and/or deploy, you need to provided the needed configuration.

Configuration needs to be stored in a `.env` file (you can copy the template from the `.env.example` sample file) that will look like this:

```bash
SKIP_PREFLIGHT_CHECK=true
```

Important:

- This flag is used to quiet an error that is happening on my local machine...chances are, you don't need this.

## Install dependencies

After cloning the repo, install the dependencies (with yarn because we're not heathens)...

```bash
cd how-it-works
yarn
```

## Local testing

In the root directory of the project, run:

```bash
yarn start
```

to start your local development server. Once compiled, the application can be viewed at localhost:3000.

## Deploy

This script will run a fresh build, then deploy it to our S3 bucket incharge of hosting the webpage.

```bash
yarn deploy
```

## License

Licensed under [ISC License](/LICENSE).