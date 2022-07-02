// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60738.phpt
  it("Bug #60738 Allow 'set_error_handler' to handle NULL", function () {
    expect(parser.parseCode("<?php\nvar_dump(set_error_handler(\n    function() { echo 'Intercepted error!', \"\\n\"; }\n));\ntrigger_error('Error!');\nvar_dump(set_error_handler(null));\ntrigger_error('Error!');\n?>")).toMatchSnapshot();
  });
});
