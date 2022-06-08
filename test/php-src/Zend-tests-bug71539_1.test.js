// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71539_1.phpt
  it("Bug #71539.1 (Memory error on $arr[$a] =& $arr[$b] if RHS rehashes)", function () {
    expect(parser.parseCode("<?php\n$x = (object)['a'=>1,'b'=>2,'c'=>3,'d'=>4,'e'=>5,'f'=>6,'g'=>7];\n$x->h =& $x->i;\n$x->h = 42;\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
