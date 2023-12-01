---
sidebar_position: 2
---

# How it Works

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## In Simple Words

LangSync CLI basically relies on a configuration file that lives in your working project, we support different configuration file formats like JSON, YAML... (`langsync.json`, `langsync.yaml`...)

This configuration file defines the way LangSync behave and execute, starting from your original/default localization file, the target launguages, the output directy...

After setting the configuration you want, this is where fun begins. Open your Terminal (MacOS/Linux) or PowerShell (Windows) and run the most important command `langsync start` and that is it, LangSync CLI takes care of everything from here localizing to all target launguages and settings the AI generated files in whatever you want.

⚡ it is always a single command away to make your life easier.

## Real World Example

Let's take a real-world use case to demonstrate what you will really get and how it will benefit you. And so, let's say you're a developer who works on a server-side project with NodeJS, Asuuming this file structure:

```langsync title="📁 .../my-nodejs-projects"

my-project
│
├── .node_modules
│   └── ...
│
├── locales
# highlight-next-line
│   └── en.json
│
├── src
│   └── server.js
│
└── package.json

```

This server intends to receive some request as exaù^me, and returns a localization file to the client side, this server-side app is really just for demonstrating purpose and it is not specific, it can be anything else, as it can be a Flutter, Javascript, Electron, Laravel, Rust, C... projects, the usage remains the same.

<br />

Let's see what the `en.json` file contains:

<Tabs>

  <TabItem value="en.json" label="en.json">

```json showLineNumbers
{
  "hello": "Hello",
  "world": "World",
  "welcome": "Welcome to my NodeJS project"
  ...
}
```

  </TabItem>
</Tabs>

Now, we want our project to target more people, which mean you will need to support those people launguages.

<br />

let's say that the languages are **Spanish**, **Arabic**, **German**, **italian** and **Chinese** languages, that means that we need to have `es.json`, `ar.json`, `de.json`, `it.json` and `zh.json` files under the `locales` folder, and each file will contain the translated texts of the original `en.json` file, this is a single command away with LangSync, in your terminal, cmd, powershell.. etc, run the following command:

```langsync
langsync start
```

<br />

That's it, now all what you need to do is to wait for the process to finish, maybe you want to work on your other tasks or to take a coffee break. When you come back, you will find a success message like this:

```langsync
Localizing process starting..
✓ Your langsync.yaml file and configuration are valid. (1ms)
✓ Your source file has been saved successfully. (1.4s)
[WARN] The ID of this operation is: 24332154-668f-4b5d-9a12-173d5ffa252c. in case of any issues, please contact us providing this ID so we can help.
✓ Localization operation is completed successfully. (94.6s)


Generating localization files: es.json, ar.json, de.json, it.json, zh.json:
✓ file es.json is created successfully, ./locales/es.json (1ms)
✓ file ar.json is created successfully, ./locales/ar.json (1ms)
✓ file de.json is created successfully, ./locales/de.json (0ms)
✓ file it.json is created successfully, ./locales/it.json (1ms)
✓ file zh.json is created successfully, ./locales/zh.json (0ms)
All files are created successfully.
All done!
```

Congratulations, You're done. This was a success message and you have now a new langauge localization under the `locales` folder, go check them out.

Your project folder structure will be now:

```langsync title="📁 .../my-nodejs-projects"

myProject
│
├── .node_modules
│   └── ...
│
├── locales
│   ├── en.json
# highlight-start
│   ├── es.json
│   ├── ar.json
│   ├── de.json
│   ├── it.json
│   └── zh.json
# highlight-end
│
├── src
│   └── index.js
│
└── package.json

```

These are the content of the new localization files:

<Tabs>

  <TabItem value="en.json" label="en.json">

```json showLineNumbers
{
  "hello": "Hello",
  "world": "World",
  "welcome": "Welcome to my NodeJS project"
  ...
}
```

  </TabItem>

  <TabItem value="es.json" label="es.json">

```json showLineNumbers
{
  "hello": "Hola",
  "world": "Mundo",
  "welcome": "Bienvenido a mi proyecto de NodeJS"
  ...
}
```

  </TabItem>

  <TabItem value="ar.json" label="ar.json" default>

```json showLineNumbers
{
  "hello": "مرحبا",
  "world": "العالم",
  "welcome": "مرحبا بك في مشروعي NodeJS"
  ...
}
```

  </TabItem>
  
  <TabItem value="de.json" label="de.json">

```json showLineNumbers
{
  "hello": "Hallo",
  "world": "Welt",
  "welcome": "Willkommen zu meinem NodeJS Projekt"
  ...
}
```

  </TabItem>

  <TabItem value="it.json" label="it.json">

```json showLineNumbers
{
  "hello": "Ciao",
  "world": "Mondo",
  "welcome": "Benvenuto al mio progetto NodeJS"
  ...
}
```

  </TabItem>

  <TabItem value="zh.json" label="zh.json">

```json showLineNumbers
{
  "hello": "你好",
  "world": "世界",
  "welcome": "欢迎来到我的NodeJS项目"
  ...
}
```

  </TabItem>

</Tabs>

## Video Example

if you prefer seeing an example video of what the next steps will be like in a real project, you can watch this video:

import ReactPlayer from "react-player";

<br />

<center>
  <ReactPlayer
    controls
    url="https://cdn.langsync.app/docs/assets/langsync%20start%20command.mp4"
  />

</center>
