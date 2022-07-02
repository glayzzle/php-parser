// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/or_001.phpt
  it("bitwise OR and strings", function () {
    expect(parser.parseCode("<?php\n$s = \"323423\";\n$s1 = \"2323.555\";\nvar_dump($s | $s1);\nvar_dump($s1 | $s);\n$s = \"some\";\n$s1 = \"test\";\nvar_dump($s | $s1);\n$s = \"some\";\n$s |= \"test\";\nvar_dump($s);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
