// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61761.phpt
  it("Bug #61761 ('Overriding' a private static method with a different signature causes crash)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n        private static function test($a) { }\n}\nclass B extends A\n{\n        private static function test($a, $b) { }\n}\n?>\n==DONE==")).toMatchSnapshot();
  });
});
