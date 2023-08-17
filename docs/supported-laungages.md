---
sidebar_position: 4
---

# Supported Languages

Due to the fact that `LangSync` relies on the power of AI, it supports all the languages that exists on the [ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

You can ensure that `LangSync` is able to translate to the laungage X by running the following command:

```bash
langsync supported-languages --to X
```

Replacing `X` by either the name or the code of the language you want to check for.

## Example

Saying we wanna check for the language `Arabic`, we can run the following command:

```bash
langsync supported-languages --to Arabic
```

This will output the following:

```bash
Great News, LangSync supports the language Arabic.
```

otherwise, if we run the following command:

```bash
langsync supported-languages --to something-that-is-not-a-language.
```

We will get the following output:

```bash
Sorry, LangSync does not support the language something-that-is-not-a-language.
```

## Where to go now ?

Give it a try, check out the [usage documentation](./cli-usage/auth.md) to get started.
