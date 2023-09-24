---
sidebar_position: 1
---

# Authentication

This section will guide you through the authentication process with the CLI, including logging in, logging out and checking your authentication status.

## Logging in to your account

In order to authenticate your account with the CLI, you will need to get & copy your Authentication Key from your dashboard, After grapping that API key, you can run the following command:

```bash
langsync account auth
```

You will be prompted to enter your API key, paste it in and hit enter. if the command ended without showing any errors, then you're good to go.

<!-- ## Checking your authentication status

At any point of using our CLI, you can always check your authentication information & status by running the following command:

```bash
langsync account info

```

This will fetch your account information from our servers and display it to you, including your name, email and the activation status of your account. -->

## Logging out

If you wish to simply log out of your account, you can run the following command:

```bash
langsync account logout

```

You will be prompted to confirm your action. once you confirm, you will be logged out of your account and you will need to log in again to use the CLI.

if you want to simply switch from accounts or to simply update your API key, you will need to only re-run the [login](#logging-in-to-your-account) command.

## Next Steps

After you have now your account authenticated with LangSync, you can start configuring the CLI to work with your projects, see the [Configuration](./configure.md) page for more details.
