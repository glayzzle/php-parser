// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/readline_read_history_001.phpt
  it("readline_read_history(): Basic test", function () {
    expect(parser.parseCode("<?php\n$name = tempnam(sys_get_temp_dir(), 'readline.tmp');\nreadline_add_history(\"foo\");\nvar_dump(readline_write_history($name));\nvar_dump(readline_clear_history());\nvar_dump(readline_read_history($name));\nvar_dump(readline_list_history());\nunlink($name);\n?>")).toMatchSnapshot();
  });
});
