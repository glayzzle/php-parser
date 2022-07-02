// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_033.phpt
  it("Closure 033: Dynamic closure property and private function", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $func;\n    function __construct() {\n        $this->func = function() {\n            echo __METHOD__ . \"()\\n\";\n        };\n    }\n    private function func() {\n        echo __METHOD__ . \"()\\n\";\n    }\n}\n$o = new Test;\n$f = $o->func;\n$f();\n$o->func();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
