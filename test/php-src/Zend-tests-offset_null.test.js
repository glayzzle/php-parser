// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/offset_null.phpt
  it("using different variables to access null offsets", function () {
    expect(parser.parseCode("<?php\n$null = NULL;\nvar_dump($null[1]);\nvar_dump($null[0.0836]);\nvar_dump($null[NULL]);\nvar_dump($null[\"run away\"]);\nvar_dump($null[TRUE]);\nvar_dump($null[FALSE]);\n$fp = fopen(__FILE__, \"r\");\nvar_dump($null[$fp]);\n$obj = new stdClass;\nvar_dump($null[$obj]);\n$arr = Array(1,2,3);\nvar_dump($null[$arr]);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
