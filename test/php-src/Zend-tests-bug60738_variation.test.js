// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60738_variation.phpt
  it("Bug #60738 Allow 'set_error_handler' to handle NULL", function () {
    expect(parser.parseCode("<?php\nvar_dump(set_exception_handler(\n    function() { echo 'Intercepted exception!', \"\\n\"; }\n));\nvar_dump(set_exception_handler(null));\nthrow new Exception('Exception!');\n?>")).toMatchSnapshot();
  });
});
