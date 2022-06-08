// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71221.phpt
  it("Bug #71221 (Null pointer deref (segfault) in get_defined_vars via ob_start)", function () {
    expect(parser.parseCode("<?php\nregister_shutdown_function(\"get_defined_vars\");\n?>")).toMatchSnapshot();
  });
});
