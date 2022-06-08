// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/ob_get_flush_error.phpt
  it("Test ob_get_flush() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ob_get_flush() : error conditions ***\\n\";\n// No ob_start() executed\nvar_dump( ob_get_flush() );\n?>")).toMatchSnapshot();
  });
});
