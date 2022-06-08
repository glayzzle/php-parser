// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70117.phpt
  it("Bug #70117 (Unexpected return type error)", function () {
    expect(parser.parseCode("<?php\nfunction &foo() :string {\n    $a = array(1);\n    $b = &$a[0];\n    return $b;\n}\nfunction &foo1() :string {\n    $a = array(\"ref\");\n    return $a[0];\n}\nvar_dump(foo());\nvar_dump(foo1());\n?>")).toMatchSnapshot();
  });
});
