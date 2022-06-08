// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug22227.phpt
  it("Bug #22227 (printf() field limiters broke between 4.2.3 and 4.3.0)", function () {
    expect(parser.parseCode("<?php\nprintf(\"%-3.3s\", \"abcdef\");\nprint \"\\n\";\n?>")).toMatchSnapshot();
  });
});
