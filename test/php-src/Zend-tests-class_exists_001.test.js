// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_exists_001.phpt
  it("Testing class_exists() inside namespace", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nclass foo {\n}\nclass_alias(__NAMESPACE__ .'\\foo', 'bar');\nvar_dump(class_exists('\\bar'));\nvar_dump(class_exists('bar'));\nvar_dump(class_exists('foo\\bar'));\nvar_dump(class_exists('foo\\foo'));\nvar_dump(class_exists('foo'));\n?>")).toMatchSnapshot();
  });
});
