// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/access_modifiers_008.phpt
  it("Inconsistencies when accessing protected members", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static protected function f() {return 'A::f()';}\n}\nclass B1 extends A {\n    static protected function f() {return 'B1::f()';}\n}\nclass B2 extends A {\n    static public function test() {echo B1::f();}\n}\nB2::test();\n?>")).toMatchSnapshot();
  });
});
