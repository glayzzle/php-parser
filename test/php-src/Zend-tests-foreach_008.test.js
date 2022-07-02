// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_008.phpt
  it("Nested foreach by reference and array modification", function () {
    expect(parser.parseCode("<?php\n$a = [0, 1, 2, 3];\nforeach ($a as &$x) {\n    foreach ($a as &$y) {\n        echo \"$x - $y\\n\";\n        if ($x == 0 && $y == 1) {\n            unset($a[2]);\n            unset($a[1]);\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
