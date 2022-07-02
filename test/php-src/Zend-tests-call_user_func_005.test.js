// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_005.phpt
  it("Passing Closure as parameter to an non-existent function", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public static function __callstatic($x, $y) {\n        var_dump($x,$y);\n        return 1;\n    }\n    public static function teste() {\n        return foo::x(function &($a=1,$b) { });\n    }\n}\nvar_dump(call_user_func(array('foo', 'teste')));\n?>")).toMatchSnapshot();
  });
});
