// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_005.phpt
  it("SCCP 005: Conditional Constant Propagation of non-escaping array elements", function () {
    expect(parser.parseCode("<?php\nfunction foo(int $x) {\n    $a = [1,2,$x];\n    echo $a[1];\n}\n?>")).toMatchSnapshot();
  });
});
