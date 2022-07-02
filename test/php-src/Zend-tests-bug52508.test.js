// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug52508.phpt
  it("Bug #52508 (newline problem with parse_ini_file+INI_SCANNER_RAW)", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ .'/bug52508.ini';\nfile_put_contents($file, \"a = 1\");\n$ini_array = parse_ini_file($file, true, INI_SCANNER_RAW);\nvar_dump($ini_array);\nunlink($file);\n?>")).toMatchSnapshot();
  });
});
