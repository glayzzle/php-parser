// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_with_refs_identical.phpt
  it("Identical comparison of array with references", function () {
    expect(parser.parseCode("<?php\n$foo = 42;\n$array1 = [&$foo];\n$array2 = [$foo];\nvar_dump($array1 === $array2);\n?>")).toMatchSnapshot();
  });
});
