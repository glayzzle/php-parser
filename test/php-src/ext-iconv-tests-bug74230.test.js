// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug74230.phpt
  it("Bug #74230 iconv fails to fail on surrogates", function () {
    expect(parser.parseCode("<?php\n$high = \"\\xED\\xa1\\x92\"; // codepoint D852\n$low = \"\\xED\\xBD\\xA2\"; // codepoint DF62\n$pair = $high.$low;\nvar_dump(\n    @\\iconv('UTF-8', 'UTF-8', $high) === false,\n    @\\iconv('UTF-8', 'UTF-8', $low) === false,\n    @\\iconv('UTF-8', 'UTF-8', $pair) === false\n);\n?>")).toMatchSnapshot();
  });
});
