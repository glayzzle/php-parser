// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_006.phpt
  it("call_user_func() should error on reference arguments", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nfunction bar(&$ref) {\n    $ref = 24;\n}\n$x = 42;\n$ref =& $x;\n\\call_user_func('Foo\\bar', $x);\nvar_dump($x);\n$y = 42;\n$ref =& $y;\ncall_user_func('Foo\\bar', $y);\nvar_dump($y);\n?>")).toMatchSnapshot();
  });
});
