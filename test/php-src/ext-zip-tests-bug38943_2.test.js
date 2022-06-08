// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug38943_2.phpt
  it("#38943, properties in extended class cannot be set (5.3)", function () {
    expect(parser.parseCode("<?php\ninclude 'bug38943.inc';\n?>")).toMatchSnapshot();
  });
});
