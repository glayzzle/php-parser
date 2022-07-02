// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70748.phpt
  it("Bug #70748 (Segfault in ini_lex () at Zend/zend_ini_scanner.l)", function () {
    expect(parser.parseCode("<?php\n$ini = '[${ \t';\n$ini_file = __DIR__ . \"/bug70748.ini\";\nfile_put_contents($ini_file, $ini);\nvar_dump(parse_ini_file($ini_file));\n?>")).toMatchSnapshot();
  });
});
