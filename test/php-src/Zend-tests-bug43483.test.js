// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43483.phpt
  it("Bug #43483 (get_class_methods() does not list all visible methods)", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public static function test() {\n        D::prot();\n        print_r(get_class_methods(\"D\"));\n    }\n}\nclass D extends C {\n    protected static function prot() {\n        echo \"Successfully called D::prot().\\n\";\n    }\n}\nD::test();\n?>")).toMatchSnapshot();
  });
});
