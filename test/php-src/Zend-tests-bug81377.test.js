// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug81377.phpt
  it("Bug #81377: unset() of $GLOBALS sub-key yields warning", function () {
    expect(parser.parseCode("<?php\nunset($GLOBALS['foo']['bar']);\n?>\n===DONE==")).toMatchSnapshot();
  });
});
