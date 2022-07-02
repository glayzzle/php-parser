// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constant_expressions_static_class_name_error.phpt
  it("Cannot use static::FOO in constant expressions", function () {
    expect(parser.parseCode("<?php\nconst C = static::FOO;\n?>")).toMatchSnapshot();
  });
});
