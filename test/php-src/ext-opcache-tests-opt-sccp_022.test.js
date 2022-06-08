// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_022.phpt
  it("SCCP 022: Invalid types", function () {
    expect(parser.parseCode("<?php\nfunction foo(int $x) {\n    $a[0] = $x;\n    $a[1] = 5;\n    echo $a[1];\n    $a->foo = 5;\n    echo $a[1];\n}\nfunction bar() {\n    foreach ($a as $v) {\n        foreach ($v as $v2) {}\n    }\n}\n?>")).toMatchSnapshot();
  });
});
