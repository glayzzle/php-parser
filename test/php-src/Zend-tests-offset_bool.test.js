// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/offset_bool.phpt
  it("using different variables to access boolean offsets", function () {
    expect(parser.parseCode("<?php\n$bool = TRUE;\nvar_dump($bool[1]);\nvar_dump($bool[0.0836]);\nvar_dump($bool[NULL]);\nvar_dump($bool[\"run away\"]);\nvar_dump($bool[TRUE]);\nvar_dump($bool[FALSE]);\n$fp = fopen(__FILE__, \"r\");\nvar_dump($bool[$fp]);\n$obj = new stdClass;\nvar_dump($bool[$obj]);\n$arr = Array(1,2,3);\nvar_dump($bool[$arr]);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
