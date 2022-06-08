// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/dce_010.phpt
  it("Incorrect DCE of FREE of COALESCE", function () {
    expect(parser.parseCode("<?php\nfunction test(?string $str) {\n    $str ?? $str = '';\n    return strlen($str);\n}\n$foo = 'foo';\n$foo .= 'bar';\nvar_dump(test($foo));\n?>")).toMatchSnapshot();
  });
});
