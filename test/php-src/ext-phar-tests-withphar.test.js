// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/withphar.phpt
  it("Phar: phar run with ext/phar with default stub", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/files/nophar.phar';\n?>")).toMatchSnapshot();
  });
});
