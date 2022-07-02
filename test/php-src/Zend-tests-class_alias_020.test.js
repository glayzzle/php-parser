// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_020.phpt
  it("Testing class alias in multiple namespaces", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nclass foo {\n}\nclass_alias(__NAMESPACE__ .'\\foo', 'foo');\nnamespace foo\\bar;\nclass foo {\n}\nclass_alias(__NAMESPACE__ .'\\foo', 'bar');\nvar_dump(new \\foo, new \\bar);\nvar_dump(new \\foo\\foo, new \\foo\\bar);\n?>")).toMatchSnapshot();
  });
});
