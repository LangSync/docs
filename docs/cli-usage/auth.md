---
sidebar_position: 1
---

# Authentication

This section will guide you through the authentication process with the CLI, including logging in, logging out and checking your authentication status.

## Logging in to your account

In order to authenticate your account with the CLI, you will need to get & copy your Authentication Key from your dashboard, then running the following command from any directory:

```bash
langsync account login

```

You will be prompted to enter your Authentication Key, paste it in and press enter. You should see a success message as the following on success:

```bash
Hello John Doe, you are now logged in and ready to use LangSync!
```

You can now use the CLI to manage your translations in your specific projects, see next sections for more details.

## Checking your authentication status

At any point of using our CLI, you can always check your authentication information & status by running the following command:

```bash
langsync account info

```

This will fetch your account information from our servers and display it to you, including your name, email and the activation status of your account.

## Logging out of your account

If you wish to log out of your account, you can run the following command:

```bash
langsync account logout

```

You will be prompted to confirm your action, if you confirm, you will be logged out of your account and you will need to log in again to use the CLI.

if you want to switch accounts, or to update your authentication key, you can re-run the login command and enter your new authentication key.

```bash
langsync account login
```

## Next Steps

After you have authenticated your account, now you can start configuring the CLI to work with your projects, see the [Configuration](./configure.md) page for more details.
