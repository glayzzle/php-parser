// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/positional_after_named.phpt
  it("Cannot used positional parameter after named parameter", function () {
    expect(parser.parseCode("<?php\ntest(a: 1, 2);\n?>")).toMatchSnapshot();
  });
});
