// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/str_offset_001.phpt
  it("string offset 001", function () {
    expect(parser.parseCode("<?php\n// Test positive or null string offsets\nfunction foo($x) {\n    var_dump($x);\n}\n$str = \"abc\";\nvar_dump($str[0]);\nvar_dump($str[1]);\nvar_dump($str[2]);\nvar_dump($str[3]);\nvar_dump($str[1][0]);\nvar_dump($str[2][1]);\nfoo($str[0]);\nfoo($str[1]);\nfoo($str[2]);\nfoo($str[3]);\nfoo($str[1][0]);\nfoo($str[2][1]);\n?>")).toMatchSnapshot();
  });
});
