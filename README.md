React Froala Editor [![React Froala Editor][npm-badge]][npm]
==============================================================================

A [Froala Editor] component for [React].

See the [live demo].

[Froala Editor]: https://www.froala.com/wysiwyg-editor
[React]: https://facebook.github.io/react/
[live demo]: https://devalien.github.io/react-froala-editor/
[npm-badge]: https://img.shields.io/npm/v/react-froala-editor.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-froala-editor

  1. [Quick start](#quick-start)
  2. [Config](#config)
  3. [API reference](#api-reference)
  4. [License](#license)


Quick start
-----------
1. Install component

It is like installing any other editor `npm install react-froala-editor`

2. Use straight away:

    ~~~jsx
    var React = require('react');
    var FroalaEditor = require('react-froala-editor');

    var MyComponent = React.createClass({
      /* ... */

      render: function() {
        return (
          <FroalaEditor 
            base='https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.3.4'
            value={this.state.value} />
        );
      }
    });
    ~~~

3. Set a base for your froala files

In this repository we do not include any froala file, it is up to you to have them served.

It can be a remote path, like the example `https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.3.4` or 
it can be the absolute path (without trailing /) of your webserver like ` ` or `/froala`
which means that if you go to `https://yoursite.com/froala` you would since the files of froala.

Pass some configuration to froala
---------------------------------
Froala is a very customizable editor and to do so you can pass a json of configuration to it and you can do that as well with this component like follows:
   ~~~jsx
    var React = require('react');
    var FroalaEditor = require('react-froala-editor');

    var MyComponent = React.createClass({
      /* ... */

      render: function() {
        return (
          <FroalaEditor 
            base='https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.3.4'
            value={this.state.value}
            config={{charCounterMax: 140}} />
        );
      }
    });
  ~~~

All this configurations can be see at: https://www.froala.com/wysiwyg-editor/docs/options

API reference
-------------

### Exports

`ReactFroalaEditor`
: The `Froala` namespaceon which you can call `registerModule` and such.

### Props (Generic)

| Property Name | Type    | Default Value | Description                                                   |
|---------------|---------|---------------|---------------------------------------------------------------|
| base          | string  |               | Base path of Froala files (accessible remotly)                |
| value         | string  |               | Default value of the editor, must be HTML                     |
| loadJquery    | boolean | true          | Load jQuery, set to false if you have it loaded already       |
| loadFA        | boolean | true          | Load Font Awesome, set to false if you have it loaded already |
| baseId        | string  | froala-editor | Base id to know which JS/CSS it has loaded already            |
| config        | object  | {}            | An object containing the config of the editor, see above      |

### Props (Plugins)
All the available plugins of Froala are available here in this componente and are visible here: https://www.froala.com/wysiwyg-editor/docs/plugins

| Property Name    | Type    | Default Value | Description                                                                                |
|------------------|---------|---------------|--------------------------------------------------------------------------------------------|
| alignP           | boolean | false         | Adds the align option                                                                      |
| charCounterP     | boolean | false         | Limits the number of characters that can be inserted in the editor                         |
| codeBeautifierP  | boolean | false         | Beautifies the code inside the code view                                                   |
| codeViewP        | boolean | false         | Enables code view for the editor                                                           |
| colorsP          | boolean | false         | Adds the possibility to change the background and text colors                              |
| draggableP       | boolean | false         | Adds to drag content. E.g.: images, videos.                                                |
| emoticonsP       | boolean | false         | Makes your users smile                                                                     |
| entitiesP        | boolean | false         | Converts characters to special HTML entities                                               |
| fileP            | boolean | false         | Upload any kind of files and special links will be inserted in the editor to download them |
| fontFamilyP      | boolean | false         | Allows users to select from different front types                                          |
| fontSizeP        | boolean | false         | Allows users to change the font size with precision                                        |
| fullscreenP      | boolean | false         | Adds fullscreen option                                                                     |
| imageP           | boolean | false         | Enables advanced image editing                                                             |
| imageManagerP    | boolean | false         | Browse through and delete images on your server                                            |
| inlineStyleP     | boolean | false         | Define custom styles for selected text                                                     |
| lineBreakerP     | boolean | false         | Helper to add new lines between elements such as tables                                    |
| linkP            | boolean | false         | Enables advanced link editing                                                              |
| listsP           | boolean | false         | Allows users to insert lists in the editor                                                 |
| paragraphFormatP | boolean | false         | Allows users to change the type of a paragraph                                             |
| paragraphStyleP  | boolean | false         | Allows users to choose a style for a pragraph                                              |
| quickInsertP     | boolean | false         | Helper to add images, tables and other stuff easier                                        |
| quoteP           | boolean | false         | Adds quote option                                                                          |
| saveP            | boolean | false         | Enables AJAX saving of the content inside the editor                                       |
| tableP           | boolean | false         | Basic and advanced operations on cells, rows and columns                                   |
| urlP             | boolean | false         | Convert text to URL as you type                                                            |
| videoP           | boolean | false         | Easily insert videos by URL or by embedded code                                            |

### Methods

If you have [a ref to a ReactFroalaEditor node](https://facebook.github.io/react/docs/more-about-refs.html), see example below.


You will be able to invoke the following methods:

`getHtml()`
: Gets the content of the editor formatted in HTML.


License
-------
The MIT License (MIT)

Copyright (c) 2016, Goncalo Margalho <g@margalho.info>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
