---
sidebar_position: 3
---

# Installation

## Installation Made Easy

To embark on your journey with LangSync CLI, ensure you have the [Dart](https://dart.dev/) SDK installed on your machine (compatible with Windows, macOS, and Linux). If you haven't installed Dart yet, follow the steps outlined in [Installing the Dart SDK.](https://dart.dev/get-dart#install).

Once Dart is set up, install LangSync CLI with a simple command:

```bash
dart pub global activate langsync
```

## Validating Your Installation

After the installation, you should now be able to use the `langsync` command in your terminal from any directory. to confirm that, open your command line/terminal and run:

```langsync
langsync --version
```

<br />

This will print the current version of LangSync CLI, as example:

```langsync
0.9.4
```

## Authenticating with Your API Key

Before heading to the next steps, you need to authenticate with your account API Key, which you can get from your [LangSync Dashboard](https://my.langsync.app/).

To authenticate, run the following command:

```langsync
langsync auth --api-key=<YOUR_API_KEY_HERE>
```

The API key will be saved in your machine, and all your next requests will be authenticated with it.


## Next Steps

Now that you have the CLI tool installed, you can start using it, you can check the [Configuration](./cli-usage/configure) page to learn more about configuring [LangSync](https://langsync.app) with your project.
