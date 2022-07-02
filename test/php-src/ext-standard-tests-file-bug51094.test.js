// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug51094.phpt
  it("Fixed bug #51094 (parse_ini_file() with INI_SCANNER_RAW cuts a value that includes a semi-colon).", function () {
    expect(parser.parseCode("<?php\n$ini = parse_ini_string('ini=\"ini;raw\"', false, INI_SCANNER_RAW);\nvar_dump($ini['ini']);\n$ini = parse_ini_string('ini=\"ini;raw', false, INI_SCANNER_RAW);\nvar_dump($ini['ini']);\n$ini = parse_ini_string('ini=ini;raw', false, INI_SCANNER_RAW);\nvar_dump($ini['ini']);\n$ini = parse_ini_string('ini=ini\"raw', false, INI_SCANNER_RAW);\nvar_dump($ini['ini']);\n$ini = parse_ini_string(\"ini=\\r\\niniraw\", false, INI_SCANNER_RAW);\nvar_dump($ini['ini']);\n?>")).toMatchSnapshot();
  });
});
