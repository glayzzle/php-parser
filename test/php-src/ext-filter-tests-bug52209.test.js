// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug52209.phpt
  it("Bug #52209 (INPUT_ENV returns NULL for set variables (CLI))", function () {
    expect(parser.parseCode("<?php\n    var_dump(filter_input(INPUT_ENV, 'PWD'));\n?>")).toMatchSnapshot();
  });
});
