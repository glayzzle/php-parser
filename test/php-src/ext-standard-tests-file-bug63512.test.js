// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug63512.phpt
  it("Fixed bug #63512 (parse_ini_file() with INI_SCANNER_RAW removes quotes from value).", function () {
    expect(parser.parseCode("<?php\n$array = parse_ini_string('\n        int = 123\n        constant = INSTALL_ROOT\n        quotedString = \"string\"\n        a = INSTALL_ROOT \"waa\"\n        b = \"INSTALL_ROOT\"\n        c = \"waa\" INSTALL_ROOT\n        d = INSTALL_ROOT \"INSTALL_ROOT\"', false, INI_SCANNER_RAW);\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
