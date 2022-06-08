// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug46811.phpt
  it("ini_set() function", function () {
    expect(parser.parseCode("<?php\nvar_dump(ini_set(\"arg_separator.output\", \"\"));\nvar_dump(ini_get(\"arg_separator.output\"));\n?>")).toMatchSnapshot();
  });
});
