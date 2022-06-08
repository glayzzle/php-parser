// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug53915.phpt
  it("Bug #53915 - ReflectionClass::getConstant(s) emits fatal error on selfreferencing constants", function () {
    expect(parser.parseCode("<?php\nClass Foo\n{\n    const A = 1;\n    const B = self::A;\n}\n$rc = new ReflectionClass('Foo');\nprint_r($rc->getConstants());\nClass Foo2\n{\n        const A = 1;\n        const B = self::A;\n}\n$rc = new ReflectionClass('Foo2');\nprint_r($rc->getConstant('B'));\n?>")).toMatchSnapshot();
  });
});
