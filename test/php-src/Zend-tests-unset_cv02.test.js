// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unset_cv02.phpt
  it("unset() CV 2 (unset() global variable in $GLOBALS)", function () {
    expect(parser.parseCode("<?php\n$x = \"ok\\n\";\necho $x;\nunset($GLOBALS[\"x\"]);\necho $x;\n?>")).toMatchSnapshot();
  });
});
