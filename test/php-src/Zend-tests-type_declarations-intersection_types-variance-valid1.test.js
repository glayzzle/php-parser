// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/valid1.phpt
  it("Valid inheritence - co-variance", function () {
    expect(parser.parseCode("<?php\ninterface A {}\ninterface B {}\ninterface C {}\nclass Test implements A, B, C {}\nclass Foo {\n    public function foo(): A {\n        return new Test();\n    }\n}\nclass FooChild extends Foo {\n    public function foo(): A&B {\n        return new Test();\n    }\n}\nclass FooSecondChild extends FooChild {\n    public function foo(): A&B&C {\n        return new Test();\n    }\n}\n$o = new FooChild();\nvar_dump($o->foo());\n$o = new FooSecondChild();\nvar_dump($o->foo());\n?>")).toMatchSnapshot();
  });
});
