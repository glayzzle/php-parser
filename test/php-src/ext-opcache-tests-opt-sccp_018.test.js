// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_018.phpt
  it("SCCP 018: Object assignment", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = new stdClass;\n    $b = $a;\n    $a->x = 5;\n    $b->x = 42;\n    echo $a->x;\n    echo \"\\n\";\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
