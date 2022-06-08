// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62814.phpt
  it("Bug #62814: It is possible to stiffen child class members visibility", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private function test() { }\n}\nclass B extends A {\n    protected function test() { }\n}\nclass C extends B {\n    private function test() { }\n}\n?>")).toMatchSnapshot();
  });
});
