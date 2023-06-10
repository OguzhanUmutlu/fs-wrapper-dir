# fs-cd
Node file system addition where it automatically uses the current directory.

<!-- TOC -->
* [fs-cd](#fs-cd)
  * [Installation](#installation)
  * [The motivation](#the-motivation)
  * [Usage](#usage)
<!-- TOC -->

## Installation

```shell
npm install fs-cd
```

## The motivation

Normally let's say you have a file system like this:

- folder1
  - folder2
    - file1.js
  - folder3
    - file2.js

```js
// file1.js
require("../folder3/file2.js");

// file2.js
const fs = require("fs-cd")(__dirname);
console.log(fs.readdirSync("."));
```

With the normal `fs` you would expect it to log out `["file1.js"]` since it's the actual source.

With the fs-cd, it uses the current directory which results with it logging out `["file2.js"]`

## Usage

```js
const fs = require("fs-cd")(__dirname);

console.log(fs.readFileSync("./hello.txt", "utf8"));
```