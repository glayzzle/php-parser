// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_empty_error.phpt
  it("Empty list() assignments are not allowed", function () {
    expect(parser.parseCode("<?php\nlist(,,,,,,,,,,) = [];\n?>")).toMatchSnapshot();
  });
});
