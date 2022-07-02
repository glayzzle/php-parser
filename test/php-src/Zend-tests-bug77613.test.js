// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77613.phpt
  it("Bug #77613 (method visibility change)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function __construct() {\n        static $foo;\n    }\n}\nclass B extends A { }\nclass C extends B {\n    private function __construct() {}\n}\n?>\nOK")).toMatchSnapshot();
  });
});
