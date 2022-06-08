// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/dce_004.phpt
  it("DCE 004: Elimination of assignment to non-escaping arrays", function () {
    expect(parser.parseCode("<?php\nfunction foo(int $x, int $y) {\n    $a = [$x];\n    $a[1] = $y;\n    $a = $y;\n    return $a;\n}\n?>")).toMatchSnapshot();
  });
});
