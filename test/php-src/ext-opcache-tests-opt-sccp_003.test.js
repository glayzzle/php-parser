// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_003.phpt
  it("SCCP 003: Conditional Constant Propagation of non-escaping array elements", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = [1,2,3];\n    $i = 1;\n    $c = $i < 2;\n    if ($c) {\n        $k = 2 * $i;\n        $a[$k] = $i;\n        echo $a[$k];\n    }\n    echo $a[2];\n}\n?>")).toMatchSnapshot();
  });
});
