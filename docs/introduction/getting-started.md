# Getting Started

## What is Chaca?

Chaca is a tool that allows you to create logical data integers with a few lines of code, in such a way that they do not violate the rules imposed by the developer

## Installation

To get started with Chaca in your Node.js project, simply add the dependency with NPM.

```bash
$ npm install chaca --dev
```

## Requirements

If you're using npm, pnpm or Yarn to install Chaca, we support:

- **Node.js** 16.x
- **Node.js** 18.x
- **Node.js** 20.x and above

## Predefined schemas

- [`address`](../schemas/address)
- [`dataType`](../schemas/data_type)
- [`finance`](../schemas/finance)
- [`date`](../schemas/date)
- [`color`](../schemas/color)
- [`animal`](../schemas/animal)
- [`id`](../schemas/id)
- [`image`](../schemas/image)
- [`video`](../schemas/video)
- [`internet`](../schemas/internet)
- [`lorem`](../schemas/lorem)
- [`person`](../schemas/person)
- [`phone`](../schemas/phone)
- [`science`](../schemas/science)
- [`system`](../schemas/system)
- [`vehicle`](../schemas/vehicle)
- [`word`](../schemas/word)

## Usage

### Create dataset schema

```js
import { chaca, schemas } from "chaca";

const userSchema = chaca.schema({
  id: chaca.sequence(),
  username: schemas.internet.userName(),
  password: schemas.internet.password(),
  image: schemas.image.person(),
  age: schemas.dataType.int({ min: 18, max: 90 }),
  isOlder: ({ fields }) => {
    return fields.age >= 60;
  },
});

// generate data
const users = userSchema.generate(50);
```

The code presented generates an array with 50 users that will have the following fields:

- `id`: create a unique id for the user. **[Learn about custom fields](../fields-type/sequence)**
- `username` create a username for thr person
- `password` create a not hashed password
- `image` provide a person image url for the user
- `age` creates an integer indicating the age of the user. Which in this case is between 18 and 90 years old
- `isOlder` a function that returns a boolean value where it will be `true` or `false` depending on the age of the user being created. **[Learn about custom fields](../fields-type/custom)**

### Generate predefined schema function value

If you want to use any of the predefined functions individually, you can do it as follows

```js
import { schemas } from "chaca";

schemas.id.uuid().getValue(); // '4136cd0b-d90b-4af7-b485-5d1ded8db252'
```

## Congratulations

Congratulations, you should now be able to create any complex object you desire. Happy faking 🥳.
