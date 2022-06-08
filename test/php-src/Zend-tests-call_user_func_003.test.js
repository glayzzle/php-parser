// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_003.phpt
  it("Testing call_user_func() with closures", function () {
    expect(parser.parseCode("<?php\n$foo = function() {\n    static $instance;\n    if (is_null($instance)) {\n        $instance = function () {\n            return 'OK!';\n        };\n    }\n    return $instance;\n};\nvar_dump(call_user_func(array($foo, '__invoke'))->__invoke());\nvar_dump(call_user_func(function() use (&$foo) { return $foo; }, '__invoke'));\n?>")).toMatchSnapshot();
  });
});
