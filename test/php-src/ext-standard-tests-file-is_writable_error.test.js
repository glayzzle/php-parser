// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_writable_error.phpt
  it("Test is_writable() and its alias is_writeable() function: error conditions", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing is_writable() on non-existent file ***\\n\";\nvar_dump( is_writable(__DIR__.\"/is_writable\") );\nvar_dump( is_writeable(__DIR__.\"/is_writable\") );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
