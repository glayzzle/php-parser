// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/variance/invalid_covariance_intersection_to_union1.phpt
  it("Co-variance failure for intersection type where child is union, but not all members are a subtype of intersection 1", function () {
    expect(parser.parseCode("<?php\ninterface X {}\ninterface Y {}\nclass TestOne implements X, Y {}\nclass TestTwo implements X {}\ninterface A\n{\n    public function foo(): X&Y;\n}\ninterface B extends A\n{\n    public function foo(): TestOne|TestTwo;\n}\n?>")).toMatchSnapshot();
  });
});
