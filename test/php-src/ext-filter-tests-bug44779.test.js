// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug44779.phpt
  it("Bug #44779 (filter returns NULL in CLI when it shouldn't)", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_input(INPUT_SERVER, \"PHP_SELF\"));\n?>")).toMatchSnapshot();
  });
});
