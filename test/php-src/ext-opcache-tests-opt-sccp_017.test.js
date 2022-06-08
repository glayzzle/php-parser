// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_017.phpt
  it("SCCP 017: Array assignment", function () {
    expect(parser.parseCode("<?php\nfunction foo(int $x) {\n    $a[0] = 5;\n    $a[1] = $x;\n    $b = $a;\n    $b[0] = 42;\n    return $a[0];\n}\n?>")).toMatchSnapshot();
  });
});
