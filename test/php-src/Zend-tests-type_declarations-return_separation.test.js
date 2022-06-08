// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/return_separation.phpt
  it("Return values are separated for references with rc=1", function () {
    expect(parser.parseCode("<?php\nfunction test1() : array {\n    $array = [];\n    $ref =& $array;\n    unset($ref);\n    return $array;\n}\nfunction test2() : string {\n    $int = 42;\n    $ref =& $int;\n    unset($ref);\n    return $int;\n}\nvar_dump(test1());\nvar_dump(test2());\n?>")).toMatchSnapshot();
  });
});
