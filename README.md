# unformat-usd [![Build Status](https://secure.travis-ci.org/cfpb/unformat-usd.png?branch=master)](http://travis-ci.org/cfpb/unformat-usd)

> Convert a United States dollar-formatted string into a number.

## Installation

First install [node.js](http://nodejs.org/). Then:

```sh
yarn add unformat-usd
```

## Usage

```javascript
import { unFormatUSD } from 'unformat-usd';
unFormatUSD('$1,234'); // 1234
unFormatUSD('$1,234.56'); // 1234.56
unFormatUSD('foo bar'); // 'foo bar'
```

## Contributing

Please read the [Contributing guidelines](CONTRIBUTING.md).

### Running Tests

We are using [jest](https://github.com/facebook/jest) to test.
To run tests, first install jest and any dependencies via yarn:

```
yarn install
```

Run tests with:

```
yarn test
```

Lint with:

```
yarn lint
```

## License

The project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](http://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.

Software source code previously released under an open source license and then modified by CFPB staff is considered a "joint work" (see 17 USC § 101); it is partially copyrighted, partially public domain, and as a whole is protected by the copyrights of the non-government authors and must be released according to the terms of the original open-source license.

For further details, please see: http://www.consumerfinance.gov/developers/sourcecodepolicy/
