// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug71897.phpt
  it("Bug #71897 (ASCII 0x7F Delete control character permitted in identifiers)", function () {
    expect(() => parser.parseCode("<?php\neval(\"\n    \\$a\\x7Fb = 3;\n    var_dump(\\$a\\x7Fb);\n\");\n?>")).toThrowErrorMatchingSnapshot();
  });
});
