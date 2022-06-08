// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47699.phpt
  it("Bug #47699 (autoload and late static binding)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static function test($v='') {\n        print_r(get_called_class());\n    }\n}\nclass B extends A {\n}\nB::test();\nspl_autoload_register('B::test');\nnew X();\n?>")).toMatchSnapshot();
  });
});
