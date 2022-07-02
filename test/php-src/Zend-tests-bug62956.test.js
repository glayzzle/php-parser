// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62956.phpt
  it("Bug #62956: \"incompatible\" signatures for private methods should not cause E_WARNING", function () {
    expect(parser.parseCode("<?php\nclass Base\n{\n    private function test()\n    {}\n}\nclass Extension extends Base\n{\n    private function test($arg)\n    {}\n}\n?>\n==DONE==")).toMatchSnapshot();
  });
});
