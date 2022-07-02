// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug26458.phpt
  it("Bug #26458 (var_dump(), var_export() & debug_zval_dump() are not binary safe for array keys)", function () {
    expect(parser.parseCode("<?php\n$test = array(\"A\\x00B\" => \"Hello world\");\nvar_dump($test);\nvar_export($test);\ndebug_zval_dump($test);\n?>")).toMatchSnapshot();
  });
});
