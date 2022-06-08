// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/forward_static_call_003.phpt
  it("forward_static_call() calling outside of the inheritance chain.", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    const NAME = 'A';\n    public static function test() {\n        echo static::NAME, \"\\n\";\n    }\n}\nclass B extends A\n{\n    const NAME = 'B';\n    public static function test() {\n        echo self::NAME, \"\\n\";\n        forward_static_call(array('parent', 'test'));\n    }\n}\nclass C\n{\n    const NAME = 'C';\n    public static function test() {\n        echo self::NAME, \"\\n\";\n        forward_static_call(array('B', 'test'));\n    }\n}\nA::test();\necho \"-\\n\";\nB::test();\necho \"-\\n\";\nC::test();\n?>")).toMatchSnapshot();
  });
});
