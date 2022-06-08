// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/readline_without_input.phpt
  it("readline() function - without input", function () {
    expect(parser.parseCode("<?php\nvar_dump(readline());\nvar_dump(readline('Prompt:'));\n?>")).toMatchSnapshot();
  });
});
