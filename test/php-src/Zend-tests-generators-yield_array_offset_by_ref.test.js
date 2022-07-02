// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_array_offset_by_ref.phpt
  it("Array offsets can be yielded by reference", function () {
    expect(parser.parseCode("<?php\nfunction &gen(array &$array) {\n    yield $array[0];\n}\n$array = [1, 2, 3];\n$gen = gen($array);\nforeach ($gen as &$val) {\n    $val *= -1;\n}\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
