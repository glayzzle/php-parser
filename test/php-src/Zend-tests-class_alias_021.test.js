// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_021.phpt
  it("Overriding internal class with class alias", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nclass bar { }\nclass_alias('foo\\bar', 'baz');\nuse \\baz as stdClass;\nvar_dump(new bar);\nvar_dump(new stdClass);\nvar_dump(new \\baz);\n?>")).toMatchSnapshot();
  });
});
