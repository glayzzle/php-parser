// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_020.phpt
  it("SCCP 020: Object assignment", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $b = $a = new stdClass;\n    $a->x = 5;\n    $b->x = 42;\n    echo $a->x;\n    echo \"\\n\";\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
