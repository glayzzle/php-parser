// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug33282.phpt
  it("Bug #33282 (Re-assignment by reference does not clear the is_ref flag)", function () {
    expect(parser.parseCode("<?php\n    $a = array(1, 2, 3);\n    $r = &$a[0];\n    $r = &$a[1];\n    $r = &$a[2];\n    var_dump($a);\n?>")).toMatchSnapshot();
  });
});
