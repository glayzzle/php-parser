// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/readline_list_history_001.phpt
  it("readline_list_history(): Basic test", function () {
    expect(parser.parseCode("<?php\nvar_dump(readline_list_history());\n?>")).toMatchSnapshot();
  });
});
