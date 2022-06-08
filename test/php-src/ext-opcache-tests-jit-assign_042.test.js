// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_042.phpt
  it("JIT ASSIGN: Assign to of reference with 1 refcount", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop;\n    function __construct() {\n        $this->prop = $this->retref();\n    }\n    function &retref() {\n        return str_repeat(\"a\", 5);\n    }\n}\n$o = new Test();\nvar_dump($o);\n?>")).toMatchSnapshot();
  });
});
