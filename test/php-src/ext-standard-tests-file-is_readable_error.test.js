// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_readable_error.phpt
  it("Test is_readable() function: error conditions", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing is_readable() on non-existent file ***\\n\";\nvar_dump( is_readable(__DIR__.\"/is_readable.tmp\") );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
