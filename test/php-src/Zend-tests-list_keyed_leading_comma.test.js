// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_keyed_leading_comma.phpt
  it("Leading comma in keyed list assignment", function () {
    expect(parser.parseCode("<?php\n[, \"a\" => $b] = [1, \"a\" => 2];\n?>")).toMatchSnapshot();
  });
});
