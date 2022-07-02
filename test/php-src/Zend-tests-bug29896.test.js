// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug29896.phpt
  it("Bug #29896 (Backtrace argument list out of sync)", function () {
    expect(parser.parseCode("<?php\nfunction userErrorHandler($num, $msg, $file, $line)\n{\n    debug_print_backtrace();\n}\n$OldErrorHandler = set_error_handler(\"userErrorHandler\");\nfunction GenerateError1($A1)\n{\n    $a = $b;\n}\nfunction GenerateError2($A1)\n{\n    GenerateError1(\"Test1\");\n}\nGenerateError2(\"Test2\");\n?>")).toMatchSnapshot();
  });
});
