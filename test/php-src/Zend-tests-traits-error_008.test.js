// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_008.phpt
  it("Trying to implement a trait", function () {
    expect(parser.parseCode("<?php\ntrait abc { }\nclass foo implements abc { }\n?>")).toMatchSnapshot();
  });
});
