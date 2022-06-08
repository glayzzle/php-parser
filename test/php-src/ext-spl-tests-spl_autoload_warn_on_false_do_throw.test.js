// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_warn_on_false_do_throw.phpt
  it("spl_autoload_register() function - warn when using false as second argument for spl_autoload_register()", function () {
    expect(parser.parseCode("<?php\nfunction customAutolader($class) {\n    require_once __DIR__ . '/testclass.class.inc';\n}\nspl_autoload_register('customAutolader', false);\nspl_autoload_call('TestClass');\nvar_dump(class_exists('TestClass', false));\n?>")).toMatchSnapshot();
  });
});
