// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_closure_from_static_method.phpt
  it("call_user_func() on non-static closure without $this inside a static method", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static function exec(callable $c) {\n        return call_user_func($c);\n    }\n    public static function doSomething() {\n        return self::exec(function(){\n            return \"okay\";\n        });\n    }\n}\nvar_dump(A::doSomething());\n?>")).toMatchSnapshot();
  });
});
