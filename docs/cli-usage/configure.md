---
sidebar_position: 2
---

# Configuration

This section will explain how to configure the CLI to your needs, including setting up your default project, default language and more.

## Creating your configuration file

From your project directory, creae a new config file using the following command:

```bash
langsync config create
```

This will create a new configuration file in your project directory named `config.langsync`, open it from your favorite text/code editor and you will see the following:

```env
INPUT_FILE = path/to/your/input/file
TARGET_LANGUAGES = lang1,lang2,lang3
```

You can now edit the file to your needs:

- Change the `INPUT_FILE` value the path of the source file you want to translate, **LangSync** will detect it's source language automatically.
- Change the `TARGET_LANGUAGES` value to a comma-separated list of the languages you want to translate your source file to.

### Example of real-world configuration

, as example saying that we have a software project with the following structure:

```bash

├── src
│   ├── code
│   │   ├── index.js
│   │   └── ...
│   └── assets
│       ├── locales
│       │   ├── en.json
│       └── ...
└── ...
```

What we want is to translate the `en.json` to the German and Italian languages, so we will set the `INPUT_FILE` value to `src/assets/locales/en.json`, and the `TARGET_LANGUAGES` value to `de,it`, so the final configuration file will look like this:

```env
INPUT_FILE = src/assets/locales/en.json
TARGET_LANGUAGES = de,it
```

## Next Steps

After you have configured the CLI to work with your project, now you can start translating your source file, see the [Translation](./start-tranlations.md) page for more details.
