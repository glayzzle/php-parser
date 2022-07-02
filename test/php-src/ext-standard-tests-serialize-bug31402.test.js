// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug31402.phpt
  it("Bug #31402 (unserialize() generates references when it should not)", function () {
    expect(parser.parseCode("<?php\nclass TestX {\n  var $i;\n  function __construct($i) {\n    $this->i = $i;\n  }\n}\nclass TestY {\n  var $A = array();\n  var $B;\n  function __construct() {\n    $this->A[1] = new TestX(1);\n    $obj = new TestX(2);\n    $this->A[2] = & $obj;\n    $this->A[3] = & $this->A[2];\n    $this->B = $this->A[1];\n  }\n}\n$before = new TestY();\n$ser = serialize($before);\n$after = unserialize($ser);\nvar_dump($before, $after);\n?>")).toMatchSnapshot();
  });
});
