// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/libedit_info_001-win32.phpt
  it("readline_info(): Basic test", function () {
    expect(parser.parseCode("<?php\nvar_dump(readline_info());\nvar_dump(readline_info(1));\nvar_dump(readline_info(1,1));\nvar_dump(readline_info('line_buffer'));\nvar_dump(readline_info('readline_name'));\nvar_dump(readline_info('readline_name', 1));\nvar_dump(readline_info('readline_name'));\nvar_dump(readline_info('attempted_completion_over',1));\nvar_dump(readline_info('attempted_completion_over'));\n?>")).toMatchSnapshot();
  });
});
