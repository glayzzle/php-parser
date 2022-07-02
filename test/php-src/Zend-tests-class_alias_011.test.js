// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_011.phpt
  it("Testing callback in alias", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    static public function test() {\n        print \"hello\\n\";\n    }\n    public function test2() {\n        print \"foobar!\\n\";\n    }\n}\nclass_alias('FOO', 'bar');\ncall_user_func(array('bar', 'test'));\n$a = new bar;\ncall_user_func(array($a, 'test2'));\n?>")).toMatchSnapshot();
  });
});
