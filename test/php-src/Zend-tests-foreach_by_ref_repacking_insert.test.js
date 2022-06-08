// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_by_ref_repacking_insert.phpt
  it("Perform a packed to hash insert when the iterator is at the end of the array", function () {
    expect(parser.parseCode("<?php\n$a = [];\n$a[1] = 1;\nforeach ($a as $k => &$v) {\n    var_dump($v);\n    if ($k == 1) $a[4] = 4;\n    if ($k == 4) $a[2] = 2;\n}\n?>")).toMatchSnapshot();
  });
});
