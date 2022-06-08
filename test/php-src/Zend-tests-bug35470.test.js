// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug35470.phpt
  it("Bug #35470 (Assigning global using variable name from array doesn't function)", function () {
    expect(parser.parseCode("<?php\n$x = array(\"test\", \"55\");\nglobal ${$x[0]};\n${$x[0]} = $x[1];\necho \"Test: $test\\n\";\n?>")).toMatchSnapshot();
  });
});
