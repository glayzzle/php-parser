// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_007.phpt
  it("Closure 007: Nested lambdas in classes", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private $x = 0;\n    function getClosureGetter () {\n        return function () {\n            return function () {\n                $this->x++;\n            };\n        };\n    }\n    function printX () {\n        echo $this->x.\"\\n\";\n    }\n}\n$a = new A;\n$a->printX();\n$getClosure = $a->getClosureGetter();\n$a->printX();\n$closure = $getClosure();\n$a->printX();\n$closure();\n$a->printX();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
