// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug70207.phpt
  it("Bug #70207 Finally is broken with opcache", function () {
    expect(parser.parseCode("<?php\nfunction bar() {\n    return \"bar\";\n}\nfunction foo() {\n    try { return bar(); }\n    finally {\n        @fopen(\"non-existent\", 'r');\n    }\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
