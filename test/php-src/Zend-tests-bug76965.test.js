// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76965.phpt
  it("Bug #76965 (INI_SCANNER_RAW doesn't strip trailing whitespace)", function () {
    expect(parser.parseCode("<?php\n// the trailing whitespace is intentional\n$ini = <<<END\n1=\"foo\"\n2=\"bar\" ; comment\n3= baz\n4= \"foo;bar\"\n5= \"foo\" ; bar ; baz\n6= \"foo;bar\" ; baz\n7= foo\"bar ; \"ok\nEND;\nvar_dump(parse_ini_string($ini, false, INI_SCANNER_RAW));\n?>")).toMatchSnapshot();
  });
});
