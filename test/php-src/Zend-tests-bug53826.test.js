// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug53826.phpt
  it("Bug #53826: __callStatic fired in base class through a parent call if the method is private", function () {
    expect(parser.parseCode("<?php\nclass A1 {\n\tpublic function __call($method, $args) { echo \"__call\\n\"; }\n\tpublic static function __callStatic($method, $args) { echo \"__callStatic\\n\"; }\n}\nclass A2 { // A1 with private function test\n\tpublic function __call($method, $args) { echo \"__call\\n\"; }\n\tpublic static function __callStatic($method, $args) { echo \"__callStatic\\n\"; }\n\tprivate function test() {}\n}\nclass B1 extends A1 {\n\tpublic function test(){\tparent::test();\t}\n}\nclass B2 extends A2 {\n\tpublic function test(){\tparent::test();\t}\n}\n$test1 = new B1;\n$test2 = new B2;\n$test1->test();\n$test2->test();\n?>")).toMatchSnapshot();
  });
});
