---
sidebar_position: 2
---

# Configuration

In order for LangSync CLI to work, a configuration file must be set up in your project directory, this configuration file will contain all the necessary configurations that allows LangSync CLI understand your project needs and so it can work properly.

This page will teach you everything you need to know about the configuration, what it is, how to create it, what are the available options and more.

## What is a configuration file?

A configurations file is basically represented in a special file that will live in your project root directory, if you are already a developer, you should be familiar with that concept, as it is a common practice in the development world.

As example for in a JavaScript project, you will find a `package.json` file in the root directory of your project, that file contains all the necessary configurations for your project to work properly, such as the project name, the project version, the project dependencies and more.

## LangSync CLI configuration file

LangSync CLI supports many different configuration file formats, such as `yaml`, `json` and more, but the most common and recommended one is the `yaml` format, as it is more readable and easier to understand and modify. but the file name should be always "langsync" with the corresponding extension, such as `langsync.yaml` or `langsync.json`.

## How LangSync CLI uses the configuration file?

For every process run you do such as [starts the localization process](./start-tranlations), LangSync CLI will read it at runtime and behave based on it. 

Modifying the configuration file means modifying the whole behavior of LangSync CLI, this gives you the flexibility to customize LangSync CLI dynamimcally based on your project needs.

## Creating your configuration file

There is two ways to create your configuration file, You can either create and modify it manually, which is annoying and error-prone, or you can use the `langsync config create` command, which will guide you through the process and create the configuration file for you.

From your project directory, open your terminal and run the following command:

```langsync
langsync config create
```

This will prompt you to input all the necessary [parameters and configurations](#configuration-options) that you will need to provide such as the path of the output directory, the target localization languages... When it is done, you will notice that a `langsync.yaml` file has been created in your project directory, that contains all the configurations you have provided, you can modify it later if you want.

Example of a `langsync.yaml` looks like:

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs>

<TabItem value="langsync.yaml" label="langsync.yaml" default>

```yaml
langsync:
  source: "./example/locales/en.json"
  output: "./example/locales"
  target: [fr, de, ar, de, zh]
```

</TabItem>

<!-- <TabItem value="langsync.json" label="langsync.json">

```json
{
  "langsync": {
    "source": "./example/locales/en.json",
    "output": "./example/locales",
    "target": ["fr", "de", "ar", "de", "zh"]
  }
}
```

</TabItem> -->

</Tabs>

<br />

:::tip
By default running `langsync config create` will create a `langsync.yaml` configuration file, if you prefer JSON or other formats, you can run `langsync config create --<supported_file_format_here>`, for example `langsync config create --json` will create a `langsync.json` configuration file.
:::

## Configuration Options

These are the available configuration options that you can customize in your configuration file, please note that not all of them are required, some of them are optional, but it is recommended to provide them all in order to meet your perfect expectations.

| Option                         | Description                                                                                                                                                       | Required | Default Value | Type     |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------- | -------- |
| `source`                       | The path of the original localization file that you want to translate.                                                                                            | `Yes`    | -             | `string` |
| `output`                       | The path of the output directory where the new localization files will be saved.                                                                                  | `Yes`    | -             | `string` |
| `target`                       | The target languages that you want to translate your localization file to.                                                                                        | `Yes`    | -             | `List`   |
| `languageLocalizationMaxDelay` | The maximum delay in seconds that a a language process can take, if any language took more the this delay, it will just be skipped and the process will continue. | `No`     | `200`         | `number` |
| `instruction` | Any additional instructions that you want to inform the AI engine about, this can be useful if you want a special behavior for your process. | `No`     | -         | `string` |

<!-- 
## Future Configuration Options

These are the future configuration options that will be added to LangSync soon.. -->

## Next Steps

After you have configured LangSync to your project needs, all what is left is start the localization process, see the [Translation](./start-tranlations) page for more details.
