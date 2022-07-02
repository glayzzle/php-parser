// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70547.phpt
  it("Bug #70547 (unsetting function variables corrupts backtrace)", function () {
    expect(parser.parseCode("<?php\nfunction brokenTrace($arg1, &$arg2, $arg3){\n    backtraceWrapper();\n    var_dump(func_get_args());\n    unset($arg3);\n    var_dump(func_get_arg(0));\n    var_dump(func_get_arg(1));\n    var_dump(func_get_arg(2));\n    var_dump(func_get_arg(3));\n    backtraceWrapper();\n    unset($arg1);\n    var_dump(func_get_args());\n    backtraceWrapper();\n    unset($arg2);\n    backtraceWrapper();\n    var_dump(func_get_arg(0));\n    var_dump(func_get_arg(1));\n    var_dump(func_get_arg(2));\n    var_dump(func_get_arg(3));\n}\n$arg2 = \"2nd\";\nbrokenTrace(\"1st\", $arg2, \"3th\", \"4th\");\nfunction backtraceWrapper(){\n    $bt = debug_backtrace();\n    var_dump($bt[1]['args']);\n}\n?>")).toMatchSnapshot();
  });
});
