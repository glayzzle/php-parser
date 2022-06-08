// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_022.phpt
  it("SPL: FixedArray: Bug GH-8044 (var_export/debug_zval_dump HT_ASSERT_RC1 debug failure for SplFixedArray)", function () {
    expect(parser.parseCode("<?php\ncall_user_func(function () {\n    $x = new SplFixedArray(1);\n    $x[0] = $x;\n    var_export($x); echo \"\\n\";\n    debug_zval_dump($x); echo \"\\n\";\n});\n?>")).toMatchSnapshot();
  });
});
