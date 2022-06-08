// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_004.phpt
  it("SCCP 004: Conditional Constant Propagation of non-escaping array elements", function () {
    expect(parser.parseCode("<?php\nfunction foo(int $x) {\n    $a = [1,2,3];\n    $a[2] = $x;\n    $i = 1;\n    $c = $i < 2;\n    if ($c) {\n        $k = 2 * $i;\n        $a[$k] = $i;\n//\t\t$a[$k]++;\n        echo isset($a[$k]);\n//\t\t$a[$k] += 5;\n    }\n    echo $a[2];\n}\n?>")).toMatchSnapshot();
  });
});
