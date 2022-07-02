// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77589.phpt
  it("BUG #77589 (Core dump using parse_ini_string with numeric sections)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    parse_ini_string(<<<INI\n[0]\na = 1\nb = on\nc = true\n[\"true\"]\na = 100\nb = null\nc = yes\nINI\n, TRUE, INI_SCANNER_TYPED));\n?>")).toMatchSnapshot();
  });
});
