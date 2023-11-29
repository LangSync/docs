---
sidebar_position: 3
---

# Start Translation process

After you [configure](configure) everything for your own project, all what is left is the actual magic to happen, right?

if you prefer seeing an example video of what the next steps will be like in a real project, you can watch this video:

import ReactPlayer from "react-player";

<br />

<center>
  <ReactPlayer
    controls
    url="https://cdn.langsync.app/docs/assets/langsync%20start%20command.mp4"
  />

</center>

<br />
<br />

## How to start the translation process?

Open your terminal, CMD or PowerShell.. under your project directory, then run:

```langsync
langsync start
```

This command will start by looking for the configuration file in your project directory, and then start the AI localization & translation process, showing you a verbose output of what is happening in the background and what is the current status of the process.

:::note
This process should not take long, but it really depends on the size of your source file, and the number of target languages that you have configured.
:::

After everything succeed, you will see a success message like:

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

After somrthing like this is shown to you, as that message covers, you will find the new localization files in the output directory (in this case, it is the `./example/locales` directory) which is changeable in the `langsync.yaml` configuration file.

And that's it, have a look & review those files and see if everything is as you expected.

:::info
In case of any error during the process, like if your internet is cut off or some other reason, feel free to save the operation ID which is shown in the response message and contact us with it describing the issue so **we can help**.
:::

## What happens under the hood?

In simple terms, this process is splitt to many tasks that are listed below:

- Uploading your source file to our servers.
- AI processing of that file, our engines start to evaluate and get to understand its content & get familiar with it.
- AI localization & translations to your target languages one by one. (The time that is taken by this really depends on the size of your source file).
- Once everything is ready, <a href="https://langsync.app" target="_blank">LangSync</a> will start distributing the results to the output directory that you configured, each to its relevant file.
- And Done, you should now go checking them by yourself.

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

And please, if you have any suggestions or feedback that you see it will help us improve our service, feel free to contact us as well, we will be happy to hear from you.

## Bug reporting

If you find any bug or issue with LangSync, and want to report it, please check what is the best way to do so in the [Bug Report](../bug_report) page.
