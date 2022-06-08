// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/bug72538.phpt
  it("Bug #72538 (readline_redisplay crashes php)", function () {
    expect(parser.parseCode("<?php\nreadline_redisplay();\n?>\nokey")).toMatchSnapshot();
  });
});
