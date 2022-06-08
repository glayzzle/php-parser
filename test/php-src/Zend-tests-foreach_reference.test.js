// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_reference.phpt
  it("foreach with reference", function () {
    expect(parser.parseCode("<?php\n$array = ['a', 'b', 'c', 'd'];\nforeach ($array as &$a) {\n}\nvar_dump($array);\nvar_dump(array_values($array));\nvar_dump($a);\nvar_dump(array_reverse($array));\n?>")).toMatchSnapshot();
  });
});
