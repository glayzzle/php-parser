// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/promotion_error1.phpt
  it("Promoted readonly property must have type", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __construct(\n        public readonly $bar\n    ) {}\n}\n?>")).toMatchSnapshot();
  });
});
