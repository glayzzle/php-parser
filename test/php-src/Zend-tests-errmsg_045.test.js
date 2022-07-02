// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_045.phpt
  it("Error message in error handler during compilation", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($_, $msg, $file) {\n    var_dump($msg, $file);\n    echo $undefined;\n});\n/* This is just a particular example of a non-fatal compile-time error\n * If this breaks in future, just find another example and use it instead */\neval('class A { private function __invoke() { } }');\n?>")).toMatchSnapshot();
  });
});
