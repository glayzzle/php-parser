// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_static_002.phpt
  it("Testing __call and __callstatic with callbacks", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __call($a, $b) {\n        print \"nonstatic\\n\";\n        var_dump($a);\n    }\n    static public function __callStatic($a, $b) {\n        print \"static\\n\";\n        var_dump($a);\n    }\n}\n$a = new Foo;\ncall_user_func(array($a, 'aAa'));\ncall_user_func(array('Foo', 'aAa'));\n?>")).toMatchSnapshot();
  });
});
