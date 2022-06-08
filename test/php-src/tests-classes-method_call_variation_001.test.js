// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/method_call_variation_001.phpt
  it("In $a->$b[Y]() and $a->X[Y]() both $a->$b[Y] and $a->X[Y] represent a global function name", function () {
    expect(parser.parseCode("<?php\n  class C {}\n  function foo($a, $b) {\n      echo \"Called global foo($a, $b)\\n\";\n  }\n  $name = 'functions';\n  $c = new C;\n  $c->functions[0] = 'foo';\n  $c->functions[1][2][3][4] = 'foo';\n  $c->$name[0](1, 2);\n  $c->$name[1][2][3][4](3, 4);\n  $c->functions[0](5, 6);\n  $c->functions[1][2][3][4](7, 8);\n?>")).toMatchSnapshot();
  });
});
