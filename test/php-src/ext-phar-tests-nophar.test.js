// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/nophar.phpt
  it("Phar: phar run without ext/phar with default stub", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/files/nophar.phar';\n?>")).toMatchSnapshot();
  });
});
