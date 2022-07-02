// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_typed_ref_result.phpt
  it("Result of assigning to typed reference", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public ?string $prop;\n}\nfunction test() {\n    $obj = new Test;\n    $ref =& $obj->prop;\n    var_dump($ref = 0);\n}\nfunction test2() {\n    $obj = new Test;\n    $ary = [];\n    $ary[0] =& $obj->prop;\n    var_dump($ary[0] = 0);\n}\ntest();\ntest2();\n?>")).toMatchSnapshot();
  });
});
