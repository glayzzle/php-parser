// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_concat_array_empty_string.phpt
  it("Assign concat of array and empty string", function () {
    expect(parser.parseCode("<?php\n$a = [0];\n$a .= '';\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
