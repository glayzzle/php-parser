// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dval_to_lval_32.phpt
  it("zend_dval_to_lval preserves low bits  (32 bit long)", function () {
    expect(parser.parseCode("<?php\n    /* test doubles around -4e21 */\n    $values = [\n        -4000000000000001048576.,\n        -4000000000000000524288.,\n        -4000000000000000000000.,\n        -3999999999999999475712.,\n        -3999999999999998951424.,\n    ];\n    /* see if we're rounding negative numbers right */\n    $values[] = -2147483649.8;\n    foreach ($values as $v) {\n        var_dump((int)$v);\n    }\n?>")).toMatchSnapshot();
  });
});
