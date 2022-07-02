// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/confusable_type_warning.phpt
  it("Warnings for confusable types", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    function test1(integer $x) {}\n    function test2(double $x) {}\n    function test3(boolean $x) {}\n    function test4(resource $x) {}\n}\nnamespace Foo {\n    use integer as foo;\n    function test5(\\integer $x) {}\n    function test6(namespace\\integer $x) {}\n    function test7(foo $x) {}\n    function test8(boolean $x) {}\n}\nnamespace Foo {\n    use integer;\n    function test9(integer $x) {}\n}\nnamespace {\n    use integer as foo;\n    function test10(\\integer $x) {}\n    function test11(namespace\\integer $x) {}\n    function test12(foo $x) {}\n    function test13(boolean $x) {}\n}\n?>")).toMatchSnapshot();
  });
});
