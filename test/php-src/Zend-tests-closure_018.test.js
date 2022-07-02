// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_018.phpt
  it("Closure 018: Assigning lambda to static var and returning by ref", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public function test(&$x) {\n        static $lambda;\n        $lambda = function &() use (&$x) {\n            return $x = $x * $x;\n        };\n        return $lambda();\n    }\n}\n$test = new foo;\n$y = 2;\nvar_dump($test->test($y));\nvar_dump($x = $test->test($y));\nvar_dump($y, $x);\n?>")).toMatchSnapshot();
  });
});
