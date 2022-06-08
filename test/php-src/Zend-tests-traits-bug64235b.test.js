// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug64235b.phpt
  it("Bug #64235 (Insteadof not work for class method in 5.4.11)", function () {
    expect(parser.parseCode("<?php\nclass TestParentClass\n{\n    public function method()\n    {\n        print_r('Parent method');\n        print \"\\n\";\n    }\n}\ntrait TestTrait\n{\n    public function method()\n    {\n        print_r('Trait method');\n        print \"\\n\";\n    }\n}\nclass TestChildClass extends TestParentClass\n{\n    use TestTrait\n    {\n        TestTrait::method as methodAlias;\n        TestParentClass::method as TestParent;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
