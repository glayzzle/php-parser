// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug61139.phpt
  it("Bug #61139 (gzopen leaks when specifying invalid mode)", function () {
    expect(parser.parseCode("<?php\ngzopen('someFile', 'c');")).toMatchSnapshot();
  });
});
