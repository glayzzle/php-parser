// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug77844.phpt
  it("Bug #77844: Crash due to null pointer in parse_ini_string with INI_SCANNER_TYPED", function () {
    expect(parser.parseCode("<?php\n$ini = <<<INI\nval1=3.7&2\nval2=2&3.7\nINI;\nvar_dump(parse_ini_string($ini, true, INI_SCANNER_TYPED));\n?>")).toMatchSnapshot();
  });
});
