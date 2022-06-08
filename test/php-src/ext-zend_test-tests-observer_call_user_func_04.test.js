// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_call_user_func_04.phpt
  it("Observer: call_user_func_array() from namespace", function () {
    expect(parser.parseCode("<?php\nnamespace Test {\n    final class MyClass\n    {\n        public static function myMethod(string $msg)\n        {\n            echo 'MyClass::myMethod ' . $msg . PHP_EOL;\n        }\n    }\n    function my_function(string $msg)\n    {\n        echo 'my_function ' . $msg . PHP_EOL;\n    }\n    call_user_func_array('Test\\\\MyClass::myMethod', ['called']);\n    call_user_func_array('Test\\\\my_function', ['called']);\n}\n?>")).toMatchSnapshot();
  });
});
