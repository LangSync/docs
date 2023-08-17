---
sidebar_position: 4
---

# Supported Formats

Currently, we support the JSON file format **(*.json)**, but we are planning to add ARB, YAML, TOML, XML, CSV, and other formats in the future.

## JSON (*.json)

```json title=en.json
{
    "hello_world": "Hello World!",
    "forget_password": "Forget Password?",
    "product_name": "Product Name",
    "type": "Type",
    "somthing_else": "Somthing Else",
}
```

LangSync will translate it to other languages, for example, German:

```json title=de.json
{
    "hello_world": "Hallo Welt!",
    "forget_password": "Passwort vergessen?",
    "product_name": "Produktname",
    "type": "Art",
    "somthing_else": "Etwas anderes",
}
```

or maybe italian:

```json title=it.json
{
    "hello_world": "Ciao mondo!",
    "forget_password": "Password dimenticata?",
    "product_name": "Nome del prodotto",
    "type": "genere",
    "somthing_else": "Qualcos'altro",
}
```

and so on..., check out the [CLI usage](./cli-usage/auth.md) documentation to get started.

## What's Next?

You want to  know about all the supported laungages by LangSync? check out the [supported languages](./supported-laungages.md) page.
