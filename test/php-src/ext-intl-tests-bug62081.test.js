// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug62081.phpt
  it("Bug #62081: IntlDateFormatter leaks memory if called twice", function () {
    expect(parser.parseCode("<?php\nini_set('intl.error_level', E_WARNING);\n$x = new IntlDateFormatter('en', 1, 1);\nvar_dump($x->__construct('en', 1, 1));\n?>")).toMatchSnapshot();
  });
});
