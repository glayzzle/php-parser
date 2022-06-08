// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/021.phpt
  it("Return type allows self", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static function getInstance() : self {\n        return new static();\n    }\n}\nclass Bar extends Foo {}\nvar_dump(Foo::getInstance());\nvar_dump(Bar::getInstance());\n?>")).toMatchSnapshot();
  });
});
