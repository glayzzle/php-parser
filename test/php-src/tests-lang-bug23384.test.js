// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug23384.phpt
  it("Bug #23384 (use of class constants in statics)", function () {
    expect(parser.parseCode("<?php\ndefine('TEN', 10);\nclass Foo {\n    const HUN = 100;\n    static function test($x = Foo::HUN) {\n        static $arr2 = array(TEN => 'ten');\n        static $arr = array(Foo::HUN => 'ten');\n        print_r($arr);\n        print_r($arr2);\n        print_r($x);\n    }\n}\nFoo::test();\necho Foo::HUN.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
