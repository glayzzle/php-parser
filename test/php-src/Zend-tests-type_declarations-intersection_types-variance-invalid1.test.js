// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/invalid1.phpt
  it("Co-variance check failure for intersection type where child replace one of intersection type members with a supertype", function () {
    expect(parser.parseCode("<?php\ninterface A {}\ninterface B extends A {}\ninterface C {}\nclass Test implements B, C {}\nclass Foo {\n    public function foo(): B&C {\n        return new Test();\n    }\n}\n/* This fails because A is a parent type for B */\nclass FooChild extends Foo {\n    public function foo(): A&C {\n        return new Test();\n    }\n}\n?>")).toMatchSnapshot();
  });
});
