<div align="center">
  <h1>Svelte component for Google Publisher Tags</h1>
</div>

[![npm package](https://img.shields.io/npm/v/@rigu/svelte-gpt.svg?style=flat-square)](https://www.npmjs.com/package/@rigu/svelte-gpt)
&nbsp;&nbsp;&nbsp;
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Svelte-gpt

Svelte library to render google ADS using google gpt (Google Publisher Tags)

### Installation

```
npm install @rigu/svelte-gpt
```
```
yarn add @rigu/svelte-gpt
```

### Usage
In your `app.html` file, in the `<head>` tag insert the script to load the Google Publisher Tags 
```HTML
<HEAD>
...
    <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
...
</HEAD>
```

In the `svelte` component you can import the `<GptSlot />` component to load ADS that you want.
```
<script lang="ts">
    const networkCode = 123456789;
    const unitCode = 'My_unit_CODE';
    const containerId = 'my-gpt-ad-slot-container';
    const maxHeight = 80;
    
    const size = [[728, 60], [900, 60], [1024, 60]];
    const sizeMapping = {
        768: [728, 60],
        1024: [[1024, 60], [900, 60]],
    };
</script>

<GptSlot {networkCode} {unitCode} {size} {sizeMapping} {containerId} {maxHeight} />
```

### Properties
| Prop          | Type   | Default              | Description                                                                                                          |
|---------------|--------|----------------------|----------------------------------------------------------------------------------------------------------------------|
| networkCode   | string | undefined            | Your `Network code` from Google Ad Manager                                                                           |
| unitCode      | string | undefined            | The `Ad unit code` that should be displayed                                                                          |
| containerId   | string | 'svelte-gpt-ad-slot' | ID attribute for `<DIV>` container where the banner will be injected. <br/> It is used also to define the gpt `Slot` |
| maxHeight     | number | 60                   | The value for `max-height` CSS style of the container                                                                |
| size          | number | []                   | List of sizes that are provided for this `Ad unit`                                                                   |
| sizeMapping   | number | {}                   | Map of the sizes, to create a responsive `Slot`                                                                      |

### CSS custom properties (variables)

You can style a component by overriding [the available CSS custom properties]
```
<GptSlot --max-width="75%" --width="auto" {networkCode} {unitCode} />
```

## License

[MIT](LICENSE)
