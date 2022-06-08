// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/readline_write_history_001.phpt
  it("readline_write_history(): Basic test", function () {
    expect(parser.parseCode("<?php\n$name = tempnam('/tmp', 'readline.tmp');\nreadline_add_history('foo');\nreadline_add_history('');\nreadline_add_history(1);\nreadline_write_history($name);\nvar_dump(file_get_contents($name));\nunlink($name);\n?>")).toMatchSnapshot();
  });
});
