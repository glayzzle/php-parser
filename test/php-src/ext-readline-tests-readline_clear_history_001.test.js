// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/readline_clear_history_001.phpt
  it("readline_clear_history(): Basic test", function () {
    expect(parser.parseCode("<?php\nvar_dump(readline_clear_history());\n?>")).toMatchSnapshot();
  });
});
