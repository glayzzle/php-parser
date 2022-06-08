// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_by_reference.phpt
  it("Generators can yield by-reference", function () {
    expect(parser.parseCode("<?php\nfunction &iter(array &$array) {\n    foreach ($array as $key => &$value) {\n        yield $key => $value;\n    }\n}\n$array = [1, 2, 3];\n$iter = iter($array);\nforeach ($iter as &$value) {\n    $value *= -1;\n}\nvar_dump($array);\n$array = [1, 2, 3];\nforeach (iter($array) as &$value) {\n    $value *= -1;\n}\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
