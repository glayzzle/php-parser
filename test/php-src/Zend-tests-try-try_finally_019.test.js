// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_019.phpt
  it("Combination of foreach, finally and goto (call order)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $n = 0;\n    function __construct($n) {\n        $this->n = $n;\n    }\n    function __destruct() {\n        echo \"destruct\" . $this->n . \"\\n\";\n    }\n}\nforeach ([new A(1)] as $a) {\n    $a = null;\n    try {\n        foreach ([new A(2)] as $a) {\n            $a = null;\n            try {\n                foreach ([new A(3)] as $a) {\n                    $a = null;\n                    goto out;\n                }\n            } finally {\n                echo \"finally1\\n\";\n            }\nout: ;\n        }\n    } finally {\n        echo \"finally2\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
