---
sidebar_position: 3
---

# Start Translation process

After you setup everything from authenticating to LangSync to configuring it for your own project withe a `langsync.yaml` file, all what is left is the actual magic to happen, right? 

Make LangSync start the work of AI localization by running: 

```bash
langsync start
```

This command will start the AI localization & translation process step-by-step, showing you a verbose logging of the progress that is made in action.

:::note
This might take a while, depending on the size of your source file and the number of target languages. so the best thing you can do is to get yourself a cup of coffee and wait for the magic to happen.
:::

After everything succeed, you will something like:

```bash
Localizing process starting..
✔️ Your langsync.yaml file and configuration are valid. (0ms)
✔️ Your source file has been saved successfully
. (1.5s)
[WARN] The ID of this operation is: 1bea0aa9-cfba-401b-8912-6993f24c8057. in case of any 
issues, please contact us providing this ID so we can help.
✔️ Localization operation is completed successfully. (50.0s)


Generating localization files: fr.json, de.json, ar.json, de.json, zh.json:
✔️ file fr.json is created successfully, ./example/locales/fr.json (1ms)
✔️ file de.json is created successfully
, ./example/locales/de.json (1ms)
✔️ file ar.json is created successfully
, ./example/locales/ar.json (0ms)
✔️ file de.json is created successfully
, ./example/locales/de.json (11ms)
✔️ file zh.json is created successfully
, ./example/locales/zh.json (8ms)
All files are created successfully
.
All done!
```

After the process is done, you will find the new translated files in the output directory (in thi case, it is the `./example/locales` directory) you specified in the `langsync.yaml` configuration file.

Have a look & review them now.

In case of any error, feel free to save the operation ID which is shown in the CLI response and contact us with ot describing the issue so **we can help**.

## What happens under the hood?

In simple terms, this process is splitt to many tasks that are listed below:

- Uploading your source file to our servers.
- AI processing of that file, our engines start to evaluate and get to understand its content & get familiar with it.
- AI localization & translations to your target languages one by one. (The time that is taken by this really depends on the size of your source file).
- Once everything is ready, LangSync will start distributing the results to the output directory that you configured, each to its relevant file.
- And Done, you should now go checking them by yourself.

<!-- ## What's next?

Check your usage of LangSync by following the Usage guide [here](./usage.md). -->