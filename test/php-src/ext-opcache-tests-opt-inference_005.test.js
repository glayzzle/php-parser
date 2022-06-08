// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/inference_005.phpt
  it("Type inference 005: Use MAY_BE_NULL result (insted of empty) for ASSIGN_DIM with invalid arguments", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = $r[] = $r = [] & $y;\n    +list(&$y) = $a;\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
