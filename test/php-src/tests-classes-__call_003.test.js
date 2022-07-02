// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/__call_003.phpt
  it("Force pass-by-reference to __call", function () {
    expect(parser.parseCode("<?php\n  class C\n  {\n      function __call($name, $values)\n      {\n          $values[0][0] = 'changed';\n      }\n  }\n  $a = array('original');\n  $b = array('original');\n  $hack =& $b[0];\n  $c = new C;\n  $c->f($a);\n  $c->f($b);\n  var_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
