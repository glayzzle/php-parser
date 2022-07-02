// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoop.006.phpt
  it("Foreach loop tests - error case: key is a reference.", function () {
    expect(parser.parseCode("<?php\n$a = array(\"a\",\"b\",\"c\");\nforeach ($a as &$k=>$v) {\n  var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
