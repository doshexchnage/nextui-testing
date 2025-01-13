# console_web

This is the console web repository without a proper name yet for "GrowConnect". Pending name change.

### BUN

We're trying out Bun!
https://bun.sh/docs

It's super fast! However, there seems to be a few small things, for example `ngrok (below)` does not seem to run inside `bun`. We haven't seen more issues like this yet, but we will always be able to fall back to `NodeJS` & `npm` later.

1. Install latest Bun:

```sh
curl -fsSL https://bun.sh/install | bash

# to install a specific version

curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.0"
```

2. Install the packages:

```sh
bun install
```

3. Run the project:

```sh
bun run local
```

### NGROK

As a start, we can use NGROK https://ngrok.com/docs to showcase local progress!

Easiest way is to install `ngrok` globally in `npm` (does not seem to run in `bun` yet, so we need to use `npm`):

```sh
npm install -g ngrok
```

You may need to open a new terminal to see the new ngrok command.

1. Then we need to add our auth token:

```sh
ngrok config add-authtoken <TOKEN>
```

`<TOKEN>` is found here: https://dashboard.ngrok.com/get-started/your-authtoken

2. And then we can run start up our webpack dev server:

- `bun run local`

3. Lastly, in a new terminal:

- `ngrok http --host-header=rewrite 7001` (this port and the port in `local.env` should match)

### DOCKER

#### Here's some basic docker commands.

Build the docker image:

```
docker build -t console-web-dev -f ./dockerfiles/dev.dockerfile .
```

Run a container using the image:

```
docker run -p 8080:443 console-web-dev
```

Cleans everything:

```
docker system prune
```
