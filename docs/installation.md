---
sidebar_position: 2
---

# Installation

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Supported Platforms

LangSync is supported on those platforms:

- Windows
- Linux
<!-- - MacOS -->

## Installation of each platform.

<Tabs>

<TabItem value="windows" label="Windows">

1. Download the latest version of [langsync.exe](//TODO: add download link).
2. Add the path to the downloaded langsync.exe file to your Path environment variable, so you can use from anywhere.

<br />

:::info
To learn how to update environment variables, see the [Microsoft PowerShell documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.3#saving-changes-to-environment-variables).
:::

</TabItem>

<TabItem value="linux" label="Linux" >
// TODO: add linu downlaod tutorial.
</TabItem>

</Tabs>

## Validating A Succesfull iInstallation

After the installation, you should be able to use the `langsync` command in your terminal from any directory. to confirm that, open your command line/terminal and run:

<Tabs>
  <TabItem value="powershell" label="Powershell" >

```powershell
langsync -v
```

  </TabItem>

  <TabItem value="cmd" label="CMD">

```cmd
langsync -v
```

</TabItem>

<TabItem value="bash" label="Bash">

```bash
$ langsync -v
```

  </TabItem>

</Tabs>

<br />

This will print the version of LangSync:

```bash
0.9.0
```

And Congratulations, you just did installed LangSync on your machine succesfully.

## What's next ?

Now that you have the CLI tool installed, you can start using it, you can check the [Usage](./cli-usage/auth.md) page to learn more about the available commands.
