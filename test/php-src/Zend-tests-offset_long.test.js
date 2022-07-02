// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/offset_long.phpt
  it("using different variables to access long offsets", function () {
    expect(parser.parseCode("<?php\n$long = 1;\nvar_dump($long[1]);\nvar_dump($long[0.0836]);\nvar_dump($long[NULL]);\nvar_dump($long[\"run away\"]);\nvar_dump($long[TRUE]);\nvar_dump($long[FALSE]);\n$fp = fopen(__FILE__, \"r\");\nvar_dump($long[$fp]);\n$obj = new stdClass;\nvar_dump($long[$obj]);\n$arr = Array(1,2,3);\nvar_dump($long[$arr]);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
