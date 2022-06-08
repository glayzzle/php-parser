// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/invalid_covariance_drop_type1.phpt
  it("Co-variance check failure for intersection type where child removes one of intersection type members", function () {
    expect(parser.parseCode("<?php\ninterface A {}\ninterface B {}\nclass Test implements A, B {}\nclass Foo {\n    public function foo(): A&B {\n        return new Test();\n    }\n}\n/* This fails because just A larger than A&B */\nclass FooChild extends Foo {\n    public function foo(): A {\n        return new Test();\n    }\n}\n?>")).toMatchSnapshot();
  });
});
