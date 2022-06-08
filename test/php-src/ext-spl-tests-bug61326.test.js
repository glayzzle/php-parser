// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug61326.phpt
  it("Bug #61326: ArrayObject comparison", function () {
    expect(parser.parseCode("<?php\n$aobj1 = new ArrayObject(array(0));\n$aobj2 = new ArrayObject(array(1));\nvar_dump($aobj1 == $aobj2);\n$aobj3 = new ArrayObject(array(0));\nvar_dump($aobj1 == $aobj3);\n$aobj3->foo = 'bar';\nvar_dump($aobj1 == $aobj3);\n?>")).toMatchSnapshot();
  });
});
