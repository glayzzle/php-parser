// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unset_cv10.phpt
  it("unset() CV 10 (unset() of global variable in ArrayObject::offsetUnset($GLOBALS))", function () {
    expect(parser.parseCode("<?php\n/* This is working on a copy of $GLOBALS, so nothing interesting happens here. */\n$a = new ArrayObject($GLOBALS);\n$x = \"ok\\n\";\necho $x;\n$a->offsetUnset('x');\necho $x;\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
