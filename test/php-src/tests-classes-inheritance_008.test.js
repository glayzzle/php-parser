// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/inheritance_008.phpt
  it("Ensure private methods with the same name are not checked for inheritance rules - static", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static private function foo() { }\n    private function bar() {}\n}\nclass B extends A {\n    private function foo() {}\n    static private function bar() {}\n}\necho 'OK';\n?>")).toMatchSnapshot();
  });
});
