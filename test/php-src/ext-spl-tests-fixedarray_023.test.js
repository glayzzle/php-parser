// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_023.phpt
  it("SPL: FixedArray: Infinite loop in var_export bugfix", function () {
    expect(parser.parseCode("<?php\ncall_user_func(function () {\n    $x = new SplFixedArray(4);\n    $x[0] = NAN; // Test NAN just in case this check is incorrectly refactored to use zend_is_identical\n    $x[1] = 0.0;\n    $x[2] = $x;\n    $x[3] = $x;\n    var_export($x);\n    echo \"\\n\";\n    $x[1] = -0.0;\n    debug_zval_dump($x);\n});\n?>")).toMatchSnapshot();
  });
});
