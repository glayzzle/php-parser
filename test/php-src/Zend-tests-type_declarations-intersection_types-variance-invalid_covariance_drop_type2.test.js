// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/invalid_covariance_drop_type2.phpt
  it("Co-variance check failure for intersection type where child removes one of intersection type members", function () {
    expect(parser.parseCode("<?php\ninterface A {}\ninterface B {}\ninterface C {}\nclass Test implements A, B, C {}\nclass Foo {\n    public function foo(): A&B&C {\n        return new Test();\n    }\n}\n/* This fails because just A&B larger than A&B&C */\nclass FooChild extends Foo {\n    public function foo(): A&B {\n        return new Test();\n    }\n}\n?>")).toMatchSnapshot();
  });
});
