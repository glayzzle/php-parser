// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug60227_1.phpt
  it("Bug #60227 (header() cannot detect the multi-line header with CR)", function () {
    expect(parser.parseCode("<?php\nheader(\"X-Foo1: a\");\nheader(\"X-Foo2: b\\n \");\nheader(\"X-Foo3: c\\r\\n \");\nheader(\"X-Foo4: d\\r \");\nheader(\"X-Foo5: e\\rSet-Cookie: ID=123\");\necho 'foo';\n?>")).toMatchSnapshot();
  });
});
