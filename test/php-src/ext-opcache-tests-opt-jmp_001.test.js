// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/jmp_001.phpt
  it("JMP 001: JMP_SET with constant arg", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $var = null;\n    $var = $var ?: test2();\n    return $var;\n}\n?>")).toMatchSnapshot();
  });
});
