// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_005.phpt
  it("Closure 005: Lambda inside class, lifetime of $this", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private $x;\n    function __construct($x) {\n        $this->x = $x;\n    }\n    function __destruct() {\n        echo \"Destroyed\\n\";\n    }\n    function getIncer($val) {\n        return function() use ($val) {\n            $this->x += $val;\n        };\n    }\n    function getPrinter() {\n        return function() {\n            echo $this->x.\"\\n\";\n        };\n    }\n    function getError() {\n        return static function() {\n            echo $this->x.\"\\n\";\n        };\n    }\n    function printX() {\n        echo $this->x.\"\\n\";\n    }\n}\n$a = new A(3);\n$incer = $a->getIncer(2);\n$printer = $a->getPrinter();\n$error = $a->getError();\n$a->printX();\n$printer();\n$incer();\n$a->printX();\n$printer();\nunset($a);\n$incer();\n$printer();\nunset($incer);\n$printer();\nunset($printer);\n$error();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
