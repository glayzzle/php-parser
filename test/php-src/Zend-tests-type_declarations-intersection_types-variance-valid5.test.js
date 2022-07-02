// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/valid5.phpt
  it("Replacing union of classes respecting intersection type by intersection type", function () {
    expect(parser.parseCode("<?php\ninterface X {}\ninterface Y {}\nclass TestOne implements X, Y {}\nclass TestTwo implements X, Y {}\ninterface A\n{\n    public function foo(TestOne|TestTwo $param): X&Y;\n}\ninterface B extends A\n{\n    public function foo(X&Y $param): TestOne|TestTwo;\n}\ninterface C extends A\n{\n    public function foo(X $param): TestTwo;\n}\ninterface D extends A\n{\n    public function foo(Y $param): TestOne;\n}\ninterface E extends B\n{\n    public function foo(X $param): TestTwo;\n}\ninterface F extends B\n{\n    public function foo(Y $param): TestOne;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
