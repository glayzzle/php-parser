// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/forward_static_call_001.phpt
  it("forward_static_call() called from outside of a method.", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    const NAME = 'A';\n    public static function test() {\n        echo static::NAME, \"\\n\";\n    }\n}\nclass B extends A\n{\n    const NAME = 'B';\n    public static function test() {\n        echo self::NAME, \"\\n\";\n        forward_static_call(array('parent', 'test'));\n    }\n    public static function test2() {\n        echo self::NAME, \"\\n\";\n        forward_static_call(array('self', 'test'));\n    }\n    public static function test3() {\n        echo self::NAME, \"\\n\";\n        forward_static_call(array('A', 'test'));\n    }\n}\nclass C extends B\n{\n    const NAME = 'C';\n    public static function test()\n    {\n        echo self::NAME, \"\\n\";\n        forward_static_call(array('A', 'test'));\n    }\n}\nA::test();\necho \"-\\n\";\nB::test();\necho \"-\\n\";\nB::test2();\necho \"-\\n\";\nB::test3();\necho \"-\\n\";\nC::test();\necho \"-\\n\";\nC::test2();\necho \"-\\n\";\nC::test3();\n?>")).toMatchSnapshot();
  });
});
