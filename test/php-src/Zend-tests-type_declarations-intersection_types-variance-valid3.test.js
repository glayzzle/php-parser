// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/valid3.phpt
  it("Valid intersection type variance", function () {
    expect(parser.parseCode("<?php\ninterface X {}\ninterface Y {}\ninterface Z {}\nclass TestParent implements X, Y, Z {}\nclass TestChild implements Z {}\nclass A {\n    public X&Y $prop;\n    public function method1(X&Y&Z $a): X&Y {}\n    public function method2(X&Y $a): X {}\n}\nclass B extends A {\n    public X&Y $prop;\n    public function method1(X&Y $a): X&Y&Z {}\n    public function method2(X $a): X&Y {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
