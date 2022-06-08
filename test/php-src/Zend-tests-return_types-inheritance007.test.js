// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/inheritance007.phpt
  it("Inheritance Hinting Compile Checking Failure Internal Classes", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static function test() : Traversable {\n        return new ArrayIterator([1, 2]);\n    }\n}\nclass Bar extends Foo {\n    public static function test() : ArrayObject {\n        return new ArrayObject([1, 2]);\n    }\n}\necho get_class(Bar::test());\n?>")).toMatchSnapshot();
  });
});
