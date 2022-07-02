// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug19859.phpt
  it("Bug #19859 (__call() does not catch call_user_func_array() calls)", function () {
    expect(parser.parseCode("<?php\nclass test\n{\n  function __call($method,$args)\n  {\n    print \"test::__call invoked for method '$method'\\n\";\n  }\n}\n$x = new test;\n$x->fake(1);\ncall_user_func_array(array($x,'fake'),array(1));\ncall_user_func(array($x,'fake'),2);\n?>")).toMatchSnapshot();
  });
});
