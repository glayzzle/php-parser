// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/invalid_invariance2.phpt
  it("Intersection type reduction invalid invariant type check", function () {
    expect(parser.parseCode("<?php\ninterface X {}\ninterface Y {}\nclass A implements X, Y {}\nclass Test {\n    public X&Y $prop;\n}\nclass Test2 extends Test {\n    public A $prop;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
