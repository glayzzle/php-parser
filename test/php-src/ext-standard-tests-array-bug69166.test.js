// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug69166.phpt
  it("Fixed #69166 (Assigning array_values() to array does not reset key counter)", function () {
    expect(parser.parseCode("<?php\n$array = [0];\n$ar = array_values($array);\n$ar[] = 1;\nvar_dump($ar);\n?>")).toMatchSnapshot();
  });
});
