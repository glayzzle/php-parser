// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug73973.phpt
  it("Bug #73973 debug_zval_dump() assertion error for resource consts with --enable-debug", function () {
    expect(parser.parseCode("<?php\ndefine('myerr', fopen('php://stderr', 'w'));\ndebug_zval_dump(myerr);\n?>")).toMatchSnapshot();
  });
});
