// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug77428.phpt
  it("Bug #77428: mb_ereg_replace() doesn't replace a substitution variable ", function () {
    expect(parser.parseCode("<?php\n// This behavior is broken, but kept for BC reasons\nvar_dump(mb_ereg_replace('(%)', '\\\\\\1', 'a%c'));\n// For clarity, the above line is equivalent to:\nvar_dump(mb_ereg_replace('(%)', '\\\\\\\\1', 'a%c'));\n?>")).toMatchSnapshot();
  });
});
