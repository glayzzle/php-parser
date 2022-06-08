// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_006.phpt
  it("SCCP 006: Conditional Constant Propagation of non-escaping array elements", function () {
    expect(parser.parseCode("<?php\nfunction foo(int $x) {\n    $a = [\"a\"=>1,\"a\"=>2,\"a\"=>$x];\n    echo $a[\"a\"];\n}\n?>")).toMatchSnapshot();
  });
});
