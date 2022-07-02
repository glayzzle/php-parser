// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bugs/case-sensitive.phpt
  it("Check for problems with case sensitivity in compositions", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait A {\n    public function M1() {}\n    public function M2() {}\n}\ntrait B {\n    public function M1() {}\n    public function M2() {}\n}\nclass MyClass {\n    use A;\n    use B;\n}\n?>")).toMatchSnapshot();
  });
});
