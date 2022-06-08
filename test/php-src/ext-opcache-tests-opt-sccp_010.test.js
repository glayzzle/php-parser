// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_010.phpt
  it("SCCP 010: Conditional Constant Propagation of non-escaping object properties", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $o = new stdClass();\n    $o->foo = 0;\n    $i = 1;\n    $c = $i < 2;\n    if ($c) {\n        $k = 2 * $i;\n        $o->foo = $i;\n        echo $o->foo;\n    }\n    echo $o->foo;\n}\n?>")).toMatchSnapshot();
  });
});
