// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/readline_read_history_error_001.phpt
  it("readline_read_history() function - Error cases", function () {
    expect(parser.parseCode("<?php\nvar_dump(readline_read_history('nofile'));\n?>")).toMatchSnapshot();
  });
});
