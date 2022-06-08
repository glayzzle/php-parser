// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug48768.phpt
  it("Bug #48768 (parse_ini_*() crashes with INI_SCANNER_RAW)", function () {
    expect(parser.parseCode("<?php\n$ini_location = __DIR__ . '/bug48768.tmp';\n// Build ini data\n$ini_data = <<< EOT\nequal = \"=\"\nEOT;\n// Save ini data to file\nfile_put_contents($ini_location, $ini_data);\nvar_dump(parse_ini_file($ini_location, false, INI_SCANNER_RAW));\nvar_dump(parse_ini_file($ini_location, false, INI_SCANNER_NORMAL));\n?>")).toMatchSnapshot();
  });
});
