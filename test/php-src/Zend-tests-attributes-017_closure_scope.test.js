// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/017_closure_scope.phpt
  it("Attributes make use of closure scope.", function () {
    expect(parser.parseCode("<?php\nclass Test1\n{\n    private const FOO = 'bar';\n}\nclass C1\n{\n    private const FOO = 'foo';\n    public static function foo()\n    {\n        return #[A1(self::class, self::FOO)] function (#[A1(self::class, self::FOO)] $p) { };\n    }\n}\n$ref = new \\ReflectionFunction(C1::foo());\nprint_r($ref->getAttributes()[0]->getArguments());\nprint_r($ref->getParameters()[0]->getAttributes()[0]->getArguments());\necho \"\\n\";\n$ref = new \\ReflectionFunction(C1::foo()->bindTo(null, Test1::class));\nprint_r($ref->getAttributes()[0]->getArguments());\nprint_r($ref->getParameters()[0]->getAttributes()[0]->getArguments());\n?>")).toMatchSnapshot();
  });
});
