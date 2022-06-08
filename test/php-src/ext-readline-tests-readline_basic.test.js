// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/readline_basic.phpt
  it("readline(): Basic test", function () {
    expect(parser.parseCode("<?php\nvar_dump(readline('Enter some text:'));\n?>")).toMatchSnapshot();
  });
});
