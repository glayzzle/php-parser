// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/005.phpt
  it("is_scalar() function test", function () {
    expect(parser.parseCode("<?php\nclass foo {}\nvar_dump (is_scalar (TRUE));\nvar_dump (is_scalar (1));\nvar_dump (is_scalar (1.0));\nvar_dump (is_scalar (\"Hi!\"));\nvar_dump (is_scalar (NULL));\nvar_dump (is_scalar (array ()));\nvar_dump (is_scalar (new foo()));\nvar_dump (is_scalar (opendir('.')));\n?>")).toMatchSnapshot();
  });
});
