// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/trait_constant_002.phpt
  it("__TRAIT__: Use outside of traits.", function () {
    expect(parser.parseCode("<?php\n    class MyClass {\n        static function test() {\n          return __TRAIT__;\n        }\n    }\n    function someFun() {\n      return __TRAIT__;\n    }\n    $t = __TRAIT__;\n    var_dump($t);\n    $t = MyClass::test();\n    var_dump($t);\n    $t = someFun();\n    var_dump($t);\n?>")).toMatchSnapshot();
  });
});
