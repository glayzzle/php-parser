// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug60227_2.phpt
  it("Bug #60227 (header() cannot detect the multi-line header with CR), \\r before \\n", function () {
    expect(parser.parseCode("<?php\nheader(\"X-foo: e\\n foo\");\necho 'foo';\n?>")).toMatchSnapshot();
  });
});
