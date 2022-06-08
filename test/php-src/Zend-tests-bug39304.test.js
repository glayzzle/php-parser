// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39304.phpt
  it("Bug #39304 (Segmentation fault with list unpacking of string offset)", function () {
    expect(parser.parseCode("<?php\n  $s = \"\";\n  list($a, $b) = $s[0];\n  var_dump($a,$b);\n?>")).toMatchSnapshot();
  });
});
