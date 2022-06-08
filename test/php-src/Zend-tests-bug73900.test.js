// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73900.phpt
  it("Bug #73900: Use After Free in unserialize() SplFixedArray", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass;\n$b = new SplFixedArray(1);\n$b[0] = $a;\n$c = &$b[0];\nvar_dump($c);\n?>")).toMatchSnapshot();
  });
});
