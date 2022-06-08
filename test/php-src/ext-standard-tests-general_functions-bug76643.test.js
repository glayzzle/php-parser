// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug76643.phpt
  it("Bug #76643 (Segmentation fault when using `output_add_rewrite_var`)", function () {
    expect(parser.parseCode("<?php\n$_SERVER = 'foo';\noutput_add_rewrite_var('bar', 'baz');\n?>\n<form action=\"http://example.com/\"></form>")).toMatchSnapshot();
  });
});
