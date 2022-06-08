// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list/list_reference_010.phpt
  it("\"Reference Unpacking - Compile Error (scalar)\" list()", function () {
    expect(parser.parseCode("<?php\nlist(&$foo) = [42];\n?>")).toMatchSnapshot();
  });
});
