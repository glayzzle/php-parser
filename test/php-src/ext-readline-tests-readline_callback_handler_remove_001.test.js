// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/readline_callback_handler_remove_001.phpt
  it("readline_callback_handler_remove(): Basic test", function () {
    expect(parser.parseCode("<?php\nvar_dump(readline_callback_handler_remove());\nvar_dump(readline_callback_handler_install('testing: ', 'foo'));\nfunction foo() { }\nvar_dump(readline_callback_handler_install('testing: ', 'foo'));\nvar_dump(readline_callback_handler_remove());\n?>")).toMatchSnapshot();
  });
});
