// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_properties_dynamic.phpt
  it("Class Property Expressions", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    const BAR = 1 << 0;\n    const BAZ = 1 << 1;\n    public $bar = self::BAR | self::BAZ;\n}\necho (new Foo)->bar;\n?>")).toMatchSnapshot();
  });
});
