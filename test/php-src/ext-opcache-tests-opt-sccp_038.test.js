// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_038.phpt
  it("SCCP 038: Memory leak", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $obj = new stdClass;\n    $obj->$b = ~$b = $a = '##';\n    $obj->$a++;\n}\nfoo();\n?>\nDONE")).toMatchSnapshot();
  });
});
