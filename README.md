# gon [![Build Status][ci-img]][ci-url] [![Coverage Status][cover-img]][cover-url]

## Sample usage

```javascript
var gon = require('gon'),
    g = gon();

g.addEventListener('click',() => console.log('click!!'),false);

gon.apply(window,g);
gon.apply(document,g);
```

[ci-img]: https://circleci.com/gh/manvalls/gon.svg?style=shield
[ci-url]: https://circleci.com/gh/manvalls/gon
[cover-img]: https://coveralls.io/repos/manvalls/gon/badge.svg?branch=master&service=github
[cover-url]: https://coveralls.io/github/manvalls/gon?branch=master
