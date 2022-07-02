// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/staticMember.phpt
  it("Static member access", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static $b = 0;\n    public static $c = [0, 1];\n    public static $A_str = 'A';\n}\n$A_str = 'A';\n$A_obj = new A;\n$b_str = 'b';\n$c_str = 'c';\nvar_dump(A::$b);\nvar_dump($A_str::$b);\nvar_dump($A_obj::$b);\nvar_dump(('A' . '')::$b);\nvar_dump('A'::$b);\nvar_dump('\\A'::$b);\nvar_dump('A'[0]::$b);\nvar_dump(A::$$b_str);\nvar_dump(A::$$c_str[1]);\nvar_dump(A::$A_str::$b);\n?>")).toMatchSnapshot();
  });
});
