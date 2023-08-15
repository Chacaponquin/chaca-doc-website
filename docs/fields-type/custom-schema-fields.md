# Custom schema fields

If none of the [defined options](/docs/category/schemas) are useful you can create your own schemas with the schemaField method.

```js
chaca.schemaField(name, fieldFunction)
```

## Params

|     Param     |   Type   | Description                                                                                         |
| :-----------: | :------: | :-------------------------------------------------------------------------------------------------- |
|     name      |  string  | Schema field name. **Cannot be an empty string**                                                    |
| fieldFunction | function | Function to be executed with the `getValue` method. Receives the arguments in the form of an object |

## Example
