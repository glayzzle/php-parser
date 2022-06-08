// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_026.phpt
  it("SCCP 026: Elimination of dead code due to conflicting type checks", function () {
    expect(parser.parseCode("<?php\nfunction test($var) {\n    if (!is_string($var) || (is_object($var) && !method_exists($var, '__toString'))) {\n        return;\n    }\n    var_dump($username);\n}\n?>")).toMatchSnapshot();
  });
});
