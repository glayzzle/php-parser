// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug66176.phpt
  it("Bug #66176 (Invalid constant substitution)", function () {
    expect(parser.parseCode("<?php\nfunction foo($v) {\n    global $a;\n    return $a[$v];\n}\n$a = array(PHP_VERSION => 1);\nvar_dump(foo(PHP_VERSION));\n?>")).toMatchSnapshot();
  });
});
