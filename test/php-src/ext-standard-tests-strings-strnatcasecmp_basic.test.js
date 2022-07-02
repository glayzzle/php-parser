// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strnatcasecmp_basic.phpt
  it("Test strnatcasecmp() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nfunction str_dump($one, $two) {\n    var_dump(strnatcasecmp($one, $two));\n}\necho \"*** Testing strnatcasecmp() : basic functionality ***\\n\";\n// Calling strnatcasecmp() with all possible arguments\nstr_dump('A', 'a');\nstr_dump('a10', 'A20');\nstr_dump('A1b', 'a');\nstr_dump('x2-y7', 'x8-y8');\nstr_dump('1.010', '1.001');\nstr_dump(' ab', ' aB');\nstr_dump('acc ', 'acc');\nstr_dump(11.5, 10.5);\nstr_dump(10.5, 10.5E1);\nstr_dump('Rfc822.txt', 'rfc2086.txt');\nstr_dump('Rfc822.txt', 'rfc822.TXT');\nstr_dump('pIc 6', 'pic   7');\nstr_dump(0xFFF, 0Xfff);\n?>")).toMatchSnapshot();
  });
});
