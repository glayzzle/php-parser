// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/this_in_unset.phpt
  it("$this in unset", function () {
    expect(parser.parseCode("<?php\nunset($this);\n?>")).toMatchSnapshot();
  });
});
