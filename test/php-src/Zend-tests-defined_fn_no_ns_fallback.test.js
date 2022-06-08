// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/defined_fn_no_ns_fallback.phpt
  it("There should be no namespace fallback when using the defined() function", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nvar_dump(\\defined('Foo\\PHP_INT_MAX'));\n$const = 'Foo\\PHP_INT_MAX';\nvar_dump(\\defined($const));\n?>")).toMatchSnapshot();
  });
});
