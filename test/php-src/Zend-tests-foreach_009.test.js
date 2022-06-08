// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_009.phpt
  it("Nested foreach by reference and array modification with resize", function () {
    expect(parser.parseCode("<?php\n$a = [0, 1, 2, 3, 4, 5, 6, 7];\nunset($a[0], $a[1], $a[2], $a[3]);\nforeach ($a as &$ref) {\n    foreach ($a as &$ref2) {\n        echo \"$ref-$ref2\\n\";\n        if ($ref == 5 && $ref2 == 6) {\n            $a[42] = 8;\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
