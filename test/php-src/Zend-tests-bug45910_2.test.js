// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug45910_2.phpt
  it("Bug #45910.2 (Cannot declare self-referencing constant)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    const AAA = 'x';\n    const BBB = 'a';\n    const CCC = 'a';\n    const DDD = self::AAA;\n    private static $foo = array(\n        self::BBB\t=> 'a',\n        self::CCC\t=> 'b',\n        self::DDD\t=>  11\n    );\n    public static function test() {\n        self::$foo;\n    }\n}\nfoo::test();\nprint 1;\n?>")).toMatchSnapshot();
  });
});
