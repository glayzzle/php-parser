// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug66251.phpt
  it("Bug #66251 (Constants get statically bound at compile time when Optimized)", function () {
    expect(parser.parseCode("<?php\nprintf (\"A=%s\\n\", getA());\nconst A=\"hello\";\nfunction getA() {return A;}\n?>")).toMatchSnapshot();
  });
});
