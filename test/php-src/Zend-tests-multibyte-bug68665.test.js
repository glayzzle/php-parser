// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/multibyte/bug68665.phpt
  it("Crash with Big5", function () {
    expect(parser.parseCode("<?php\necho '\\'hello';\n?>")).toMatchSnapshot();
  });
});
