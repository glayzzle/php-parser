// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/inheritance006.phpt
  it("External covariant return type of self", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . \"/classes.php.inc\";\nclass Foo {\n    public static function test() : A {\n        return new A;\n    }\n}\nclass Bar extends Foo {\n    public static function test() : B {\n        return new B;\n    }\n}\necho get_class(Bar::test());\n?>")).toMatchSnapshot();
  });
});
