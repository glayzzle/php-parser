// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug74603.phpt
  it("Bug #74603 (PHP INI Parsing Stack Buffer Overflow Vulnerability)", function () {
    expect(parser.parseCode("<?php\nvar_dump(parse_ini_file(__DIR__ . \"/bug74603.ini\", true, INI_SCANNER_NORMAL));\n?>")).toMatchSnapshot();
  });
});
