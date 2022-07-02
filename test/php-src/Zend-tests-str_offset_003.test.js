// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/str_offset_003.phpt
  it("string offset 003", function () {
    expect(parser.parseCode("<?php\n// Test negative string offsets\nfunction foo($x) {\n    var_dump($x);\n}\n$str = \"abcdef\";\nvar_dump($str[-10]);\nvar_dump($str[-3]);\nvar_dump($str[2][-2]);\nvar_dump($str[2][-1]);\nfoo($str[-10]);\nfoo($str[-3]);\nfoo($str[2][-2]);\nfoo($str[2][-1]);\n?>")).toMatchSnapshot();
  });
});
