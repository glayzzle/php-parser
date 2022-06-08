// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug29015.phpt
  it("Bug #29015 (Incorrect behavior of member vars(non string ones)-numeric mem vars und others)", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass();\n$x = \"\";\n$a->$x = \"string('')\";\nvar_dump($a);\n$a->{\"\\0\"} = 42;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
