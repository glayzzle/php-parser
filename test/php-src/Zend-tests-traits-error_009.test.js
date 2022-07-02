// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_009.phpt
  it("Trying to extend a trait", function () {
    expect(parser.parseCode("<?php\ntrait abc { }\nclass foo extends abc { }\n?>")).toMatchSnapshot();
  });
});
