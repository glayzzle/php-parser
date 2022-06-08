// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_call_basic.phpt
  it("spl_autoload_call() function - basic test for spl_autoload_call()", function () {
    expect(parser.parseCode("<?php\nfunction customAutolader($class) {\n    require_once __DIR__ . '/testclass.class.inc';\n}\nspl_autoload_register('customAutolader');\nspl_autoload_call('TestClass');\nvar_dump(class_exists('TestClass', false));\n?>")).toMatchSnapshot();
  });
});
