// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_031.phpt
  it("SCCP 031: Echo optimizations", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $k = 0;\n    $a = [null];\n    echo isset($a[$k]);\n    echo \"b\";\n    echo isset($a[$k+1]);\n    echo \"c\";\n    echo $a[$k];\n    echo $a; // Should not be optimized\n}\n?>")).toMatchSnapshot();
  });
});
