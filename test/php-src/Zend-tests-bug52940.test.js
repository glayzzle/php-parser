// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug52940.phpt
  it("Bug #52940 (call_user_func_array still allows call-time pass-by-reference)", function () {
    expect(parser.parseCode("<?php\nfunction foo($a) {\n    $a++;\n    var_dump($a);\n}\nfunction bar(&$a) {\n        $a++;\n        var_dump($a);\n}\n$a = 1;\ncall_user_func_array(\"foo\", array(&$a));\nvar_dump($a);\ncall_user_func_array(\"bar\", array(&$a));\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
