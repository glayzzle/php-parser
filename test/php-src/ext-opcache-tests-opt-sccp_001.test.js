// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_001.phpt
  it("SCCP 001: Constant propagation", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = 1;\n    $b = $a + 2;\n    $a += $b;\n    return $a;\n}\n?>")).toMatchSnapshot();
  });
});
