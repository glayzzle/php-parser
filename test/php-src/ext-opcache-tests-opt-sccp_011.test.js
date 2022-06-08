// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_011.phpt
  it("SCCP 011: Conditional Constant Propagation of non-escaping object properties", function () {
    expect(parser.parseCode("<?php\nfunction foo(int $x) {\n    $o = new stdClass;\n    if ($x) {\n        $o->foo = 0;\n        $o->bar = 1;\n    } else {\n        $o->foo = 0;\n        $o->bar = 2;\n    }\n    echo $o->foo;\n}\n?>")).toMatchSnapshot();
  });
});
