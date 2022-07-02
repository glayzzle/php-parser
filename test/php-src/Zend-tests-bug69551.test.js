// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69551.phpt
  it("Bug #69551 - parse_ini_file() and parse_ini_string() segmentation fault", function () {
    expect(parser.parseCode("<?php\n$ini = <<<INI\n[Network.eth0]\nSubnetMask = \"\n\"\nINI;\n$settings = parse_ini_string($ini, false, INI_SCANNER_RAW);\nvar_dump($settings);\n?>")).toMatchSnapshot();
  });
});
