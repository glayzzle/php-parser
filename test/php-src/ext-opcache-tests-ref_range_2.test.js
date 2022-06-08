// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/ref_range_2.phpt
  it("Range info for references (2)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    escape_x($x);\n    $x = 0;\n    modify_x();\n    return PHP_INT_MAX + (int) $x;\n}\nfunction escape_x(&$x) {\n    $GLOBALS['x'] =& $x;\n}\nfunction modify_x() {\n    $GLOBALS['x']++;\n}\nvar_dump(test());\n?>")).toMatchSnapshot();
  });
});
