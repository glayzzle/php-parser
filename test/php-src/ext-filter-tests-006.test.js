// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/006.phpt
  it("filter_input() test", function () {
    expect(parser.parseCode("<?php\necho filter_input(INPUT_POST, 'foo', FILTER_SANITIZE_SPECIAL_CHARS);\n?>")).toMatchSnapshot();
  });
});
