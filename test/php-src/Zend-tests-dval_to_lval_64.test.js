// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dval_to_lval_64.phpt
  it("zend_dval_to_lval preserves low bits  (64 bit long)", function () {
    expect(parser.parseCode("<?php\n    /* test doubles around -4e21 */\n    $values = [\n        -4000000000000001048576.,\n        -4000000000000000524288.,\n        -4000000000000000000000.,\n        -3999999999999999475712.,\n        -3999999999999998951424.,\n    ];\n    foreach ($values as $v) {\n        var_dump((int)$v);\n    }\n?>")).toMatchSnapshot();
  });
});
