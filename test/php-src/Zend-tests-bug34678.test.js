// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34678.phpt
  it("Bug #34678 (__call(), is_callable() and static methods)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function __call($m, $a) {\n        echo \"__call\\n\";\n    }\n}\nclass B extends A {\n    public static function foo() {\n        echo \"foo\\n\";\n    }\n}\nif (is_callable(array('B', 'foo'))) {\n    call_user_func(array('B', 'foo'));\n}\nif (is_callable(array('A', 'foo'))) {\n    call_user_func(array('A', 'foo'));\n}\n?>")).toMatchSnapshot();
  });
});
