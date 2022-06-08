// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/parse_ini_file_variation1.phpt
  it("Test parse_ini_file() function : variation: identical properties and values are not referenced.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing parse_ini_file() : variation ***\\n\";\n$output_file = __FILE__.\".ini\";\n$iniFile = <<<FILE\n[section1]\nvalue1=original\nvalue2=original\n[section2]\nvalue1=original\nvalue2=different\nFILE;\nfile_put_contents($output_file, $iniFile);\n$a = parse_ini_file($output_file, true);\nvar_dump($a);\n$a['section1']['value1'] = 'changed';\nvar_dump($a);\nunlink($output_file);\n?>")).toMatchSnapshot();
  });
});
