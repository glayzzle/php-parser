// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/valid2.phpt
  it("Commutative intersection types", function () {
    expect(parser.parseCode("<?php\ninterface A {}\ninterface B {}\nclass Foo {\n    public A&B $prop;\n    public function foo(A&B $v): A&B {}\n}\nclass FooChild extends Foo {\n    public B&A $prop;\n    public function foo(B&A $v): B&A {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
