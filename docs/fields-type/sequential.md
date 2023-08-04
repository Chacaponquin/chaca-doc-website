# Sequential Field

Array of values that will be assigned according to the index of the document being created.

```js
const postSchema = chaca.schema({
  category: chaca.sequential(["Horror", "Action", "Comedy", "Sport"]),
  // rest fields
});

const data = postSchema.generate(4);

/*
[
  { category: "Horror" },
  { category: "Action" },
  { category: "Comedy" },
  { category: "Sport" },
];
*/
```

:::danger Be careful
If you pass an array of values with a length less than the number of documents to generate, an exception will be thrown

```js
const postSchema = chaca.schema({
  category: chaca.sequential(["Horror", "Action", "Comedy", "Sport"]),
  // rest fields
});

// This will throw an exception because there are only 4 sequential values for 10 documents to generate.
const data = postSchema.generate(10);
```

:::
