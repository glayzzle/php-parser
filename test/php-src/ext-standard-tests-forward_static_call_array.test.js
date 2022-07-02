// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/forward_static_call_array.phpt
  it("mixed forward_static_call_array ( callable $function , array $parameters );", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $args = func_get_args();\n    echo \"C \" . join(',', $args) . \" \\n\";\n}\nclass A {\n    const NAME = 'A';\n    public static function test() {\n        $args = func_get_args();\n        echo static::NAME, \" \" . join(',', $args) . \" \\n\";\n    }\n}\nclass B extends A {\n    const NAME = 'B';\n    public static function test() {\n        echo self::NAME, \"\\n\";\n        forward_static_call_array(array('A', 'test'), array('more', 'args'));\n        forward_static_call_array('test', array('other', 'args'));\n    }\n}\nB::test('foo');\n?>")).toMatchSnapshot();
  });
});
