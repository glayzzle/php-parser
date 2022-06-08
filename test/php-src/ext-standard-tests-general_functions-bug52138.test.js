// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug52138.phpt
  it("Bug #52138 (Constants are parsed into the ini file for section names)", function () {
    expect(parser.parseCode("<?php\ndefine('MYCONST', 1);\ndefine('A', 'B');\n$ini_file = __DIR__.\"/bug52138.data\";\n$ret = parse_ini_file($ini_file, true);\nvar_dump($ret);\n?>")).toMatchSnapshot();
  });
});
