// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug60227_3.phpt
  it("Bug #60227 (header() cannot detect the multi-line header with CR), \\0 before \\n", function () {
    expect(parser.parseCode("<?php\nheader(\"X-Foo6: e\\0Set-Cookie: ID=\\n123\\n d\");\necho 'foo';\n?>")).toMatchSnapshot();
  });
});
