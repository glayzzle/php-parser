// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/static_variable_in_private_method.phpt
  it("Inheritance of private method with static variable", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private function m() {\n        static $x;\n    }\n}\nclass B extends A {}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
