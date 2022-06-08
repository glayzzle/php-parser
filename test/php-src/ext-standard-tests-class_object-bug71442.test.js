// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/bug71442.phpt
  it("Bug #71442 (forward_static_call crash)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    const NAME = 'A';\n    public static function test() {\n        $args = func_get_args();\n        echo static::NAME, \" \".join(',', $args).\" \\n\";\n    }\n}\nclass B extends A\n{\n    const NAME = 'B';\n    public static function test() {\n        echo self::NAME, \"\\n\";\n        forward_static_call(array('A', 'test'), 'more', 'args');\n        forward_static_call( 'test', 'other', 'args');\n    }\n}\nB::test('foo');\nfunction test() {\n    $args = func_get_args();\n    echo \"C \".join(',', $args).\" \\n\";\n}\n?>")).toMatchSnapshot();
  });
});
