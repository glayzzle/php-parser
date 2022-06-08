// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_026.phpt
  it("Closure 026: Assigning a closure object to an array in $this", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public function __construct() {\n        $a =& $this;\n        $a->a[] = function() {\n            return 1;\n        };\n        var_dump($this);\n        var_dump($this->a[0]());\n    }\n}\n$x = new foo;\nprint \"--------------\\n\";\nforeach ($x as $b => $c) {\n    var_dump($b, $c);\n    var_dump($c[0]());\n}\n?>")).toMatchSnapshot();
  });
});
