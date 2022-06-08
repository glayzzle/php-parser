// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_007.phpt
  it("SCCP 007: Conditional Constant Propagation of non-escaping array elements", function () {
    expect(parser.parseCode("<?php\nfunction foo(int $x) {\n    if ($x) {\n        $a = [0,1];\n    } else {\n        $a = [0,2];\n    }\n    echo $a[0];\n}\n?>")).toMatchSnapshot();
  });
});
