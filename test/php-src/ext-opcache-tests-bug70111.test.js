// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug70111.phpt
  it("Bug #70111 (Segfault when a function uses both an explicit return type and an explicit cast)", function () {
    expect(parser.parseCode("<?php\nvar_dump(foo());\nfunction foo() : string {\n  return (string) 42;\n}\n?>")).toMatchSnapshot();
  });
});
