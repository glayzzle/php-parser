// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_016.phpt
  it("Testing creation of alias to global scope", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nclass bar {\n}\nclass_alias('foo\\bar', 'foo');\nvar_dump(new \\foo);\nvar_dump(new foo);\n?>")).toMatchSnapshot();
  });
});
