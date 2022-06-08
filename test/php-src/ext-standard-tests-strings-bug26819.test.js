// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug26819.phpt
  it("Bug #26819 (http_build_query() crash on empty output)", function () {
    expect(parser.parseCode("<?php\n$a = array();\nvar_dump(http_build_query($a));\n?>")).toMatchSnapshot();
  });
});
