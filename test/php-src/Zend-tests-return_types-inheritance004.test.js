// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/inheritance004.phpt
  it("Internal covariant return type of self", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static function test() : self {\n        return new Foo;\n    }\n}\nclass Bar extends Foo {\n    public static function test() : parent {\n        return new Bar;\n    }\n}\nvar_dump(Bar::test());\nvar_dump(Foo::test());\n?>")).toMatchSnapshot();
  });
});
