// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug60227_4.phpt
  it("Bug #60227 (header() cannot detect the multi-line header with CR), CRLF", function () {
    expect(parser.parseCode("<?php\nheader(\"X-foo: e\\r\\nfoo\");\necho 'foo';\n?>")).toMatchSnapshot();
  });
});
