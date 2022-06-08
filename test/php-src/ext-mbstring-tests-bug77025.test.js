// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug77025.phpt
  it("Bug #77025: mb_strpos throws Unknown encoding or conversion error", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_strpos('Hello', 'e', 0, '8bit'));\nvar_dump(mb_stripos('Hello', 'e', 0, '8bit'));\n?>")).toMatchSnapshot();
  });
});
