// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_040.phpt
  it("SCCP 040: Memory leak", function () {
    expect(parser.parseCode("<?php\nfunction f() {\n    $y[] = $arr[] = array($y);\n    $arr();\n}\nf();\n?>")).toMatchSnapshot();
  });
});
