// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_007.phpt
  it("Testing class_alias() using autoload", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($a) {\n    class foo { }\n});\nclass_alias('foo', 'bar', 1);\nvar_dump(new foo, new bar);\n?>")).toMatchSnapshot();
  });
});
