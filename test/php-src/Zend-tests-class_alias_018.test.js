// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_018.phpt
  it("Testing class alias with is_subclass_of()", function () {
    expect(parser.parseCode("<?php\nclass foo {\n}\nclass_alias('foo', 'bar');\nclass baz extends bar {\n}\nvar_dump(is_subclass_of(new foo, 'foo'));\nvar_dump(is_subclass_of(new foo, 'bar'));\nvar_dump(is_subclass_of(new foo, 'baz'));\nvar_dump(is_subclass_of(new bar, 'foo'));\nvar_dump(is_subclass_of(new bar, 'bar'));\nvar_dump(is_subclass_of(new bar, 'baz'));\nvar_dump(is_subclass_of(new baz, 'foo'));\nvar_dump(is_subclass_of(new baz, 'bar'));\nvar_dump(is_subclass_of(new baz, 'baz'));\n?>")).toMatchSnapshot();
  });
});
