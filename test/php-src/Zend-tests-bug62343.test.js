// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62343.phpt
  it("Bug #62343 (Show class_alias In get_declared_classes())", function () {
    expect(parser.parseCode("<?php\nclass a { }\nclass_alias(\"a\", \"b\");\n$c = get_declared_classes();\nvar_dump(end($c));\nvar_dump(prev($c));\n?>")).toMatchSnapshot();
  });
});
