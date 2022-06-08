// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71539_2.phpt
  it("Bug #71539.2 (Memory error on $arr[$a] =& $arr[$b] if RHS rehashes)", function () {
    expect(parser.parseCode("<?php\n$a = [0,1,2,3,4,5,6];\n$a[200] =& $a[100];\n$a[100] =42;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
