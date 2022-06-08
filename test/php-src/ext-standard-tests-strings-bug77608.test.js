// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug77608.phpt
  it("Bug #77608: http_build_query doesn't encode \"+\" in a float number", function () {
    expect(parser.parseCode("<?php\n$a = [\"x\" => 1E+14, \"y\" => \"1E+14\"];\necho http_build_query($a);\n?>")).toMatchSnapshot();
  });
});
