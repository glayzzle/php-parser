// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/valid4.phpt
  it("Intersection type reduction valid invariant type check", function () {
    expect(parser.parseCode("<?php\nclass A {}\nclass B extends A {}\nclass Test {\n    public A&B $prop;\n}\nclass Test2 extends Test {\n    public B $prop;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
