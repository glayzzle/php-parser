// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/and_001.phpt
  it("bitwise AND and strings", function () {
    expect(parser.parseCode("<?php\n$s = \"123\";\n$s1 = \"234\";\nvar_dump($s & $s1);\n$s = \"test\";\n$s1 = \"some\";\nvar_dump($s & $s1);\n$s = \"test long\";\n$s1 = \"some\";\nvar_dump($s & $s1);\n$s = \"test\";\n$s1 = \"some long\";\nvar_dump($s & $s1);\n$s = \"test\";\n$s &= \"some long\";\nvar_dump($s);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
