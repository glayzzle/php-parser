// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_037.phpt
  it("Closure 037: self:: and static:: within closures", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private $x = 0;\n    function getClosure () {\n            return function () {\n                $this->x++;\n                self::printX();\n                self::print42();\n                static::print42();\n            };\n    }\n    function printX () {\n        echo $this->x.\"\\n\";\n    }\n    function print42() {\n        echo \"42\\n\";\n    }\n}\nclass B extends A {\n    function print42() {\n        echo \"forty two\\n\";\n    }\n}\n$a = new A;\n$closure = $a->getClosure();\n$closure();\n$b = new B;\n$closure = $b->getClosure();\n$closure();\n?>\nDone.")).toMatchSnapshot();
  });
});
