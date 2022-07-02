// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_exists_002.phpt
  it("Testing several valid and invalid parameters", function () {
    expect(parser.parseCode("<?php\nclass foo {\n}\nvar_dump(class_exists(''));\nvar_dump(class_exists('FOO'));\nvar_dump(class_exists('bar'));\nvar_dump(class_exists(1));\n?>")).toMatchSnapshot();
  });
});
