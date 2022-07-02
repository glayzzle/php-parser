// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/halt03.phpt
  it("__HALT_COMPILER() basic test", function () {
    expect(parser.parseCode("<?php\nif (true) {\n    __HALT_COMPILER();\n}\n?>")).toMatchSnapshot();
  });
});
