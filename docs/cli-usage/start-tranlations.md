---
sidebar_position: 3
---

# Start Translation process

After you did created & configured the `config.langsync` file, all what is left is to start the process of AI translation & generation of the translated files, to do so, run the following command:

```bash
langsync start
```

This will start the translation process step-by-step, showing you the progress of each one.

:::note
This might take a while, depending on the size of your source file and the number of target languages. so the best thing you can do is to get yourself a cup of coffee and wait for the magic to happen, or you can complete your other tasks while **LangSync** is doing it's job.
:::

After the process is done, you will find the new translated files in the output directory you specified in the `config.langsync` file.

have a look over them, after you get satisied with the results, you can go ahead and commit and use them.

## What's next?

Check your usage of LangSync by following the Usage guide [here](./usage.md).