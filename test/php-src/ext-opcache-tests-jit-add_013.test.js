// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/add_013.phpt
  it("JIT ADD: 013 register allocation (incorrect hinting)", function () {
    expect(parser.parseCode("<?php\nfunction y(){\n    $j = 2;\n    for (; $a = $j - 7 + $y = $a - 7; $a = $a + 1 / 3) {\n        $j++;\n        if ($j > 4) break;\n    }\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
