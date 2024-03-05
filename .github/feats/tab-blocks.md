[Remark Tab Blocks](https://github.com/mrazauskas/docusaurus-remark-plugin-tab-blocks)

```js tab
console.log("Hello JavaScript tab!");
```

```ts tab
console.log("Ahoy TypeScript tab!");
```

![](https://github.com/mrazauskas/docusaurus-remark-plugin-tab-blocks/blob/main/.github/readme/quick-example.gif)

## `Tab` options

Each tab can be customized separately by assign a configuration object to the `tab` key. Keep in mind that the object must be parsable JSON.

#### `label`

- Type: `string`

Sets custom tab label text.

````md
```bash tab={"label":"npm"}
npm install docusaurus-remark-plugin-tab-blocks
```

```bash tab={"label":"yarn"}
yarn add docusaurus-remark-plugin-tab-blocks
```
````

#### `span`

- Type: `number`

Makes a single tab wrap two or more code blocks.

````md
```js tab={"span":2} title="SomeClass.js"
module.exports = class SomeClass {
  method(a, b) {}
};
```

```js title="SomeClass.test.js"
const SomeClass = require("./SomeClass");

// this and previous code blocks live in a single tab
```

```ts tab={"span":2} title="SomeClass.ts"
export class SomeClass {
  method(a: string, b: string): void {}
}
```

```ts title="SomeClass.test.ts"
import { SomeClass } from "./SomeClass";

// this and previous code blocks live in a single tab
```
````

The example above will be rendered like this:

![](https://github.com/mrazauskas/docusaurus-remark-plugin-tab-blocks/blob/main/.github/readme/span-example.gif)