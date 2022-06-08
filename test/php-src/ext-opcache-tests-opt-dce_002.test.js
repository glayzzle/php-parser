// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/dce_002.phpt
  it("DCE 002: func_get_args() disables deletion of assignments to parameter variables", function () {
    expect(parser.parseCode("<?php\nfunction foo(int $a) {\n    $a = 10;\n    $b = 20;\n    $x = func_get_args();\n    $a = 30;\n    $b = 40;\n    return $x;\n}\n?>")).toMatchSnapshot();
  });
});
