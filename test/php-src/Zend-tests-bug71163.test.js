// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71163.phpt
  it("Bug #71163 (Segmentation Fault (cleanup_unfinished_calls))", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n    eval (\"class $name extends Exception { public static function foo() {}}\");\n    throw new Exception(\"boom\");\n});\nfunction test2() {\n    try {\n        Test::foo();\n    } catch (Exception $e) {\n        echo \"okey\";\n    }\n}\nfunction test() {\n    test2();\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
