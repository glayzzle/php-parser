// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_012.phpt
  it("Testing dynamic alias name", function () {
    expect(parser.parseCode("<?php\nnamespace test\\baz;\nclass foo {\n}\nnew foo;\nclass_alias(__NAMESPACE__ .'\\foo', __NAMESPACE__ .'\\T');\nvar_dump(new foo);\nvar_dump(new T);\n$var = __NAMESPACE__ .'\\foo';\nvar_dump(new $var);\n$var = __NAMESPACE__ .'\\T';\nvar_dump(new $var);\n?>")).toMatchSnapshot();
  });
});
