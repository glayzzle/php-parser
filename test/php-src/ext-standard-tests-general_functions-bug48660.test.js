// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug48660.phpt
  it("Bug #48660 (parse_ini_*(): dollar sign as last character of value fails)", function () {
    expect(parser.parseCode("<?php\n$ini_location = __DIR__ . '/bug48660.tmp';\n// Build ini data\n$ini_data = '\n[cases]\nCase.a = avalue\nCase.b = \"$dollar_sign\"\nCase.c = \"dollar_sign$\"\nCase.d = \"$dollar_sign$\"\nCase.e = 10\n';\n// Save ini data to file\nfile_put_contents($ini_location, $ini_data);\nvar_dump(parse_ini_file($ini_location, true, INI_SCANNER_RAW));\nvar_dump(parse_ini_file($ini_location, true, INI_SCANNER_NORMAL));\n?>")).toMatchSnapshot();
  });
});
