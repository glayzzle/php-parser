// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/parse_ini_file_variation2.phpt
  it("Test parse_ini_file() function : variation: handling different boolean values", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing parse_ini_file() : variation ***\\n\";\n$output_file = __FILE__.\".ini\";\n$iniFile = <<<FILE\n[section1]\nvalue1=on\nvalue2=off\n[section2]\nvalue1=true\nvalue2=false\n[section3]\nvalue1=yes\nvalue2=no\n[section4]\nvalue1=null\nvalue2=\n[section5]\nvalue1=\"on\"\nvalue2=\"off\"\n[section6]\nvalue1=\"true\"\nvalue2=\"false\"\n[section7]\nvalue1=\"yes\"\nvalue2=\"no\"\n[section8]\nvalue1=\"null\"\nvalue2=\"\"\nFILE;\nfile_put_contents($output_file, $iniFile);\n$a = parse_ini_file($output_file, true);\nvar_dump($a);\nunlink($output_file);\n?>")).toMatchSnapshot();
  });
});
