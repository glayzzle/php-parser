// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/readline_read_history_open_basedir_001.phpt
  it("readline_read_history(): Test that open_basedir is respected", function () {
    expect(parser.parseCode("<?php\n$name = '/tmp/out-of-sandbox';\nvar_dump(readline_read_history($name));\n?>")).toMatchSnapshot();
  });
});
