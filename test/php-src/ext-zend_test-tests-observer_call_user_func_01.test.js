// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_call_user_func_01.phpt
  it("Observer: call_user_func() from root namespace", function () {
    expect(parser.parseCode("<?php\nnamespace Test {\n    final class MyClass\n    {\n        public static function myMethod()\n        {\n            echo 'MyClass::myMethod called' . PHP_EOL;\n        }\n    }\n    function my_function()\n    {\n        echo 'my_function called' . PHP_EOL;\n    }\n}\nnamespace {\n    call_user_func('Test\\\\MyClass::myMethod');\n    call_user_func('Test\\\\my_function');\n}\n?>")).toMatchSnapshot();
  });
});
