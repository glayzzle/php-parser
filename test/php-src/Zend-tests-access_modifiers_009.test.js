// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/access_modifiers_009.phpt
  it("Inconsistencies when accessing protected members - 2", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static protected function f() {return 'A::f()';}\n}\nclass B1 extends A {\n    static protected function f() {return 'B1::f()';}\n}\nclass B2 extends A {\n    static public function test() {\n        var_dump(is_callable('B1::f'));\n        B1::f();\n    }\n}\nB2::test();\n?>")).toMatchSnapshot();
  });
});
