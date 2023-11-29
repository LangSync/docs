---
sidebar_position: 3
---

# Start Localization

This page will show you how to start the localization process using the LangSync CLI, we will cover almost eveything you need to know here.

it is expected that you have already [installed LangSync CLI](/installation) and did set your LangSync [configuration](/cli-usage/configure) in you working project.

## Start the magic ✨

Open your command line/terminal under your working project directory, then run:

```langsync
langsync start
```

LangSync CLI now will initiate by looking for the configuration file in your working project directory, analyze it, then start the AI localization & translation process, showing you a verbose output of what exactly is happening in the background and what is the current status of the process in real-time (which is really helpful for debugging and understanding what is happening).

## What to expect?

After running the provious command above, on full success you will see something like this:

```langsync
Localizing process starting..
✔️ Your langsync.yaml file and configuration are valid. (0ms)
✔️ Your source file has been saved successfully
. (1.5s)
[WARN] The ID of this operation is: 1bea0aa9-cfba-401b-8912-6993f24c8057. in case of any
issues, please contact us providing this ID so we can help.
✔️ Localization operation is completed successfully. (50.0s)


Generating localization files: fr.json, de.json, ar.json, de.json, zh.json:
✔️ file fr.json is created successfully, ./example/locales/fr.json (1ms)
✔️ file de.json is created successfully, ./example/locales/de.json (1ms)
✔️ file ar.json is created successfully, ./example/locales/ar.json (0ms)
✔️ file de.json is created successfully, ./example/locales/de.json (11ms)
✔️ file zh.json is created successfully, ./example/locales/zh.json (8ms)
All files are created successfully

All done!
```

Congratulations, You're done. This was a success message and you have now a new langauge localization under the output directory that you configured, go check them out.

## What happens under the hood?

In simple terms, this process is splitt to many tasks that are listed below:

- Uploading your source file to our servers.
- AI processing of that file, our engines start to evaluate and get to understand its content & get familiar with it.
- AI localization & translations to your target languages one by one. (The time that is taken by this really depends on the size of your source file).
- Once everything is ready, LangSync CLI will start distributing the results to the output directory that you configured, each to its relevant file.
- And done, you should now go checking them by yourself.

## Error handling

if any error occurs during any language localization process, a special kind of JSON files (\*.error.json) that includes details of the error will be created, as example if the error occurs while localizing & translation to the de (German language), a `de.error.json` will be created containing details like this:

```json
{
  "error": "...",
  "partitionId": "...",
  "lang": "..",
  "LocalizationTryDate": "..",
  "message": "..."
}
```

In some cases, the error might be related to our ends (which we really don't want them to happen), in this case, you can just retry the process again and it should work fine. (but make sure you re-configure LangSync again before retrying to make sure you don't override the previous files that were created successfully)

<br />

if the error occurs again and again and you can't get it to work, feel free to (contact us)[../contact] with the error details and we will be happy to help.

## Bug reporting

If you find any bug or issue with LangSync, and want to report it, please check what is the best way to do so in the [Bug Report](../bug_report) page.
