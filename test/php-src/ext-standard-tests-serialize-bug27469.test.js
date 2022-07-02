// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug27469.phpt
  it("Bug #27469 (serialize() objects of incomplete class)", function () {
    expect(parser.parseCode("<?php\n$str = 'O:9:\"TestClass\":0:{}';\n$obj = unserialize($str);\nvar_dump($obj);\necho serialize($obj).\"\\n\";\nvar_dump($obj);\necho serialize($obj).\"\\n\";\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
