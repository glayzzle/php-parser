// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/dce_009.phpt
  it("DCE 009: Foreach over empty array is a no-op", function () {
    expect(parser.parseCode("<?php\nclass Loop {\n    const VALUES = [];\n    public static function test() {\n        echo \"Start\\n\";\n        $y = [];\n        foreach ($y as $x) {\n        }\n        echo \"Done\\n\";\n    }\n    public static function test2() {\n        foreach (self::VALUES as $x) {\n        }\n    }\n    public static function test3() {\n        foreach ([] as $k => &$v) {\n        }\n    }\n}\nLoop::test();\nLoop::test2();\nLoop::test3();")).toMatchSnapshot();
  });
});
