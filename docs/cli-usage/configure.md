---
sidebar_position: 2
---

# Configuration

This section will explain how to configure the CLI to your needs inside your project, including setting up your original localization file, the target new localizations languages, and the output directory..

LangSync configurations is basically represented in a `langsync.yaml` file that will live in your project root directory.

You can either create and modify that file manually, or using the CLI. we recommend using the CLI since it exposes an instant validation of the configuration.

## Creating your configuration file

From your project directory, create a new config file using the following command:

```bash
langsync config create
```

This will prompt you to input all the necessary options in format of questions that you will need to answer such asking you about the output directory, the target localization languages..

:::note
if a `langsync.yaml` already exists in your project directory, LangSync will notify you about that and ask you if you want to overwrite it.
:::

After you do set all your configuration options, you will notice that a `langsync.yaml` file now exists in yout project directory. this is the file that will be used each time you will try to start a new localization process.

Example of a `langsync.yaml` file content:

```yaml
langsync:

  source: './example/locales/en.json' 

  output: './example/locales' 

  target: [fr, de, ar, de, zh] 

```

Check [configuration options](#configuration-options) section to learn about all the possible configuration you can do.

## Configuration Options

LangSync configuration options:

- `source`: The JSON source file that contains your current software localizations for a certain languauge, it must be a file path.

- `output`: The directory where the new generated localizations JSON files will be put inside, it must be a directory path.

- `target`: The new languages which you want to localize your software with, it must be a list of languages names. (We recommend following the the [List of ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for languages).

:::note
The languages names you do specify in the `target` configuration will be the names of the output files. as example, the localization file for the `de` will be saved as `de.json`.
:::

## Next Steps

After you have configured the CLI to work with your project, now you can start the localization process, see the [Translation](./start-tranlations.md) page for more details.
