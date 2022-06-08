// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/__call_001.phpt
  it("ZE2 __call()", function () {
    expect(parser.parseCode("<?php\nclass Caller {\n    public $x = array(1, 2, 3);\n    function __call($m, $a) {\n        echo \"Method $m called:\\n\";\n        var_dump($a);\n        return $this->x;\n    }\n}\n$foo = new Caller();\n$a = $foo->test(1, '2', 3.4, true);\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
