// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43343.phpt
  it("Bug #43343 (Variable class name)", function () {
    expect(() => parser.parseCode("<?php\nnamespace Foo;\nclass Bar { }\n$foo = 'bar';\nvar_dump(new namespace::$foo);\n?>")).toThrowErrorMatchingSnapshot();
  });
});
