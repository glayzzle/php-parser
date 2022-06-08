// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug71063.phpt
  it("Bug #71063 (filter_input(INPUT_ENV, ..) does not work)", function () {
    expect(parser.parseCode("<?php\nvar_dump($_ENV['PATH']);\nvar_dump(filter_input(INPUT_ENV, 'PATH'));\n?>")).toMatchSnapshot();
  });
});
